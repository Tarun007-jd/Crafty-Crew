const API_MAP = {
  greetings: 'http://10.108.57.54:8000/predict-gesture',
  alphabets: 'http://10.108.57.82:8002/predict-Alphabets',
  numbers: 'http://10.108.57.82:8001/predict-Numbers',
};

import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function SignMirror({ route }) {
  const { category = 'greetings' } = route.params || {};
  const API_URL = API_MAP[category];

  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [gesture, setGesture] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  const captureAndSend = async () => {
    if (!cameraRef.current || !permission?.granted || isProcessing) return;

    setIsProcessing(true);

    try {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        quality: 0.8,
        skipProcessing: true,
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
        setError('');
      } else {
        setGesture('');
        setError(data.message || 'No hand detected');
      }
    } catch (err) {
      console.error('API Error:', err);
      setError('API connection failed');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    let interval;
    if (permission?.granted) {
      interval = setInterval(captureAndSend, 2500);
    }
    return () => clearInterval(interval);
  }, [permission]);

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
    <LinearGradient colors={['#F6E6FF', '#E0F7FA']} style={styles.container}>
      <StatusBar hidden />
      <Text style={[styles.title, { fontFamily: 'Pacifico_400Regular' }]}>GesturePlay</Text>
      <Text style={styles.subText}>Show your sign to begin!</Text>

      <Animated.View entering={FadeInDown} style={styles.cameraWrapper}>
        <View style={styles.mirrorFrame}>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
            isActive={true}
            enableTorch={false}
          />
        </View>

        {gesture && (
          <Animated.View entering={FadeInDown.delay(300)} style={styles.resultBox}>
            <Text style={styles.gestureLabel}>{gesture}</Text>
          </Animated.View>
        )}
      </Animated.View>

      {error ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 40,
    color: '#7B68EE',
    marginBottom: 4,
  },
  subText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 18,
  },
  cameraWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mirrorFrame: {
    width: width * 0.9,
    height: width * 0.8,
    borderWidth: 6,
    borderColor: '#A9A9F5',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  resultBox: {
    marginTop: 18,
    backgroundColor: '#E6FFFA',
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#40E0D0',
  },
  gestureLabel: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FF69B4',
  },
  error: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFEBEB',
    borderRadius: 10,
  },
  errorText: {
    color: '#D8000C',
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