import React, { useState, useEffect, useRef } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  Dimensions,
  StatusBar 
} from 'react-native'
import { Video, ResizeMode } from 'expo-av'

const { width, height } = Dimensions.get('window')

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Start fade and scale animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      })
    ]).start()

    // Show video after text animation
    const videoTimer = setTimeout(() => {
      setShowVideo(true)
    }, 800)

    // Navigate to home after splash duration
    const navigationTimer = setTimeout(() => {
      navigation.replace("Login")
    }, 7000) // Increased time to accommodate video

    return () => {
      clearTimeout(videoTimer)
      clearTimeout(navigationTimer)
    }
  }, [fadeAnim, scaleAnim, navigation])

  const handleVideoEnd = () => {
    // Optional: Navigate immediately when video ends
    navigation.replace("Login")
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      {/* Animated Title */}
      <Animated.View 
        style={[
          styles.titleContainer,
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <Text style={styles.title}>Sign Language App</Text>
        <Text style={styles.subtitle}>Learn • Practice • Connect</Text>
      </Animated.View>

      {/* Video Logo */}
      {showVideo && (
        <Animated.View 
          style={[
            styles.videoContainer,
            { 
              opacity: fadeAnim 
            }
          ]}
        >
          <Video
            ref={videoRef}
            source={require('../assets/Splashvideo.mp4')} // Your logo video
            style={styles.video}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={true}
            isLooping={false}
            isMuted={true}

            onLoad={(status) => {
              if (status.isLoaded && videoRef.current) {
                videoRef.current.playAsync()
              }
            }}
            onPlaybackStatusUpdate={(status) => {
              if (status.didJustFinish) {
                handleVideoEnd()
              }
            }}
          />
        </Animated.View>
      )}

      {/* Loading indicator */}
      {/* <Animated.View 
        style={[
          styles.loadingContainer,
          { opacity: fadeAnim }
        ]}
      >
        <View style={styles.loadingDots}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </Animated.View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14b8a6",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    letterSpacing: 1,
    textAlign: "center",
  },
  videoContainer: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 50,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'black', // Fallback color
    
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  loadingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 4,
  },
  dot1: {
    animationDelay: '0s',
  },
  dot2: {
    animationDelay: '0.2s',
  },
  dot3: {
    animationDelay: '0.4s',
  },
})

export default SplashScreen
