import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, ActivityIndicator, Image } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';

const API_URL = 'http://10.108.57.54:8000/predict-gesture/';
const { width } = Dimensions.get('window');

export default function SignMirror() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [gesture, setGesture] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastImage, setLastImage] = useState(null);

  useEffect(() => {
    if (permission === false) {
      requestPermission();
    }
  }, [permission]);

  const captureAndSend = async () => {
    if (!cameraRef.current || isLoading || !permission?.granted) return;
    
    setIsLoading(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        quality: 0.8
      });
      
      setLastImage(photo.uri);
      
      // Use file object with uri for React Native FormData
      const formData = new FormData();
      formData.append('file', {
        uri: photo.uri,
        name: 'frame.jpg',
        type: 'image/jpeg',
      });
      
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const data = await response.json();
      if (data.success) {
        setGesture(data.gesture);
        setConfidence(data.confidence);
        setError('');
      } else {
        setGesture('');
        setConfidence(0);
        setError(data.message || 'No hand detected');
      }
    } catch (err) {
      setError('API connection failed');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let interval;
    if (permission?.granted) {
      interval = setInterval(() => {
        captureAndSend();
      }, 1500);
    }
    
    return () => clearInterval(interval);
  }, [isLoading, permission]);

  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!permission) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>Loading camera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>No access to camera</Text>
        <Text style={styles.subText}>Please enable camera permissions in settings</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={['#91C8E4', '#C5B0CD']} style={styles.container}>
      <StatusBar hidden />
      <Text style={[styles.title, { fontFamily: 'Pacifico_400Regular' }]}>SignMirror</Text>
      <Text style={styles.subText}>Let's practice signs!!</Text>

      <View style={styles.cameraWrapper}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing="front"
        />
        
        <View style={styles.overlay}>
          {isLoading && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#FFFFFF" />
              <Text style={styles.loaderText}>Analyzing...</Text>
            </View>
          )}

          {!isLoading && gesture && (
            <View style={styles.resultBox}>
              <Text style={styles.gestureLabel}>{gesture}</Text>
              <Text style={styles.confidence}>{(confidence * 100).toFixed(1)}%</Text>
            </View>
          )}
        </View>
      </View>

      {error ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>⚠️ {error}</Text>
        </View>
      ) : null}

      {lastImage && (
        <Image 
          source={{ uri: lastImage }} 
          style={styles.previewImage} 
          resizeMode="cover"
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 25,
  },
  cameraWrapper: {
    width: width * 0.8,
    height: width * 1.0,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#FFB347',
    overflow: 'hidden',
    backgroundColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    alignItems: 'center',
  },
  resultBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  gestureLabel: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4caf50',
  },
  confidence: {
    fontSize: 18,
    color: '#333',
  },
  loader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 8,
  },
  loaderText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  error: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffeaea',
    borderWidth: 1,
    borderColor: '#f44336',
    borderRadius: 6,
  },
  errorText: {
    color: '#b71c1c',
    fontWeight: '500',
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});