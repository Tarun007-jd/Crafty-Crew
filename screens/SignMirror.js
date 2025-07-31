import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, ActivityIndicator } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';

const API_URL = 'http://192.168.239.54:8000/predict-gesture/';
const { width } = Dimensions.get('window');

export default function SignMirror() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [gesture, setGesture] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Keep CameraView mounted: do not unmount/remount it
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
        quality: 0.8,
        skipProcessing: true,
        pauseAfterCapture: false,

      });

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
      }, 1000); 
    }
    return () => clearInterval(interval);
  }, [isLoading, permission]);

  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) return null;

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
    <LinearGradient colors={['#FDEFF9', '#A1C4FD']} style={styles.container}>
      <StatusBar hidden />
      <Text style={[styles.title, { fontFamily: 'Pacifico_400Regular' }]}>SignMirror</Text>
      <Text style={styles.subText}>Let's practice signs! 🤟</Text>

      <View style={styles.cameraWrapper}>
        <View style={styles.mirrorFrame}>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
            // If you use expo-camera/next or react-native-vision-camera, uncomment and use:
            isActive={true}
            enableTorch={false}
          />
        </View>

        {!isLoading && gesture && (
          <View style={styles.resultBox}>
            <Text style={styles.gestureLabel}>✋ {gesture}</Text>
            <Text style={styles.confidence}>{(confidence * 100).toFixed(1)}%</Text>
          </View>
        )}
      </View>

      {error ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>⚠️ {error}</Text>
        </View>
      ) : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 38,
    color: '#5D3FD3',
    marginBottom: 5,
  },
  subText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
  },
  cameraWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mirrorFrame: {
    width: width * 0.75,
    height: width * 1.0,
    borderWidth: 8,
    borderColor: '#B0C4DE',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: '#FFF3C4',
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  gestureLabel: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  confidence: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
  },
  error: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFCCCC',
    borderRadius: 10,
  },
  errorText: {
    color: '#990000',
    fontSize: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#555',
  },
});
