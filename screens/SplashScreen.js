"use client"

import { useEffect, useRef } from "react"
import { View, StyleSheet, Animated, Dimensions } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const { width, height } = Dimensions.get("window")

const SplashScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current
  const rotateAnim = useRef(new Animated.Value(0)).current
  const titleAnim = useRef(new Animated.Value(50)).current
  const subtitleAnim = useRef(new Animated.Value(30)).current

  useEffect(() => {
    // Start animations
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: -1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ),
      Animated.timing(titleAnim, {
        toValue: 0,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleAnim, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start()

    // Navigate to home after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("Home")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigation])

  const rotate = rotateAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-10deg", "0deg", "10deg"],
  })

  const scale = scaleAnim.interpolate({
    inputRange: [0.5, 1],
    outputRange: [0.5, 1.1],
  })

  return (
    <LinearGradient colors={["#a855f7", "#ec4899", "#ef4444"]} style={styles.container}>
      <View style={styles.content}>
        <Animated.Text
          style={[
            styles.emoji,
            {
              transform: [{ rotate }, { scale }],
            },
          ]}
        >
          🤟
        </Animated.Text>

        <Animated.Text
          style={[
            styles.title,
            {
              transform: [{ translateY: titleAnim }],
            },
          ]}
        >
          Sign Language Fun!
        </Animated.Text>

        <Animated.Text
          style={[
            styles.subtitle,
            {
              transform: [{ translateY: subtitleAnim }],
            },
          ]}
        >
          Learning made easy and fun!
        </Animated.Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
})

export default SplashScreen
