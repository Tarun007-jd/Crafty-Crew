"use client"

import { useEffect, useRef } from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const QuizScreen = ({ navigation, route }) => {
  const { module, level } = route.params
  const scaleAnim = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#10b981", "#3b82f6", "#8b5cf6"]} style={styles.gradient}>
        <View style={styles.content}>
          <Animated.View
            style={[
              styles.celebrationCard,
              {
                transform: [{ scale: scaleAnim }],
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.celebrationEmoji}>🎉</Text>
            <Text style={styles.congratsText}>Congratulations!</Text>
            <Text style={styles.completionText}>You completed the {module.name} module!</Text>

            <View style={styles.starsContainer}>
              <Text style={styles.starsEmoji}>⭐⭐⭐</Text>
              <Text style={styles.starsText}>You earned 3 stars!</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={() => navigation.navigate("Modules", { level })}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Continue Learning</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.rewardsButton}
                onPress={() => navigation.navigate("Rewards")}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>View Rewards</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  celebrationCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    backdropFilter: "blur(10px)",
    width: "100%",
  },
  celebrationEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  congratsText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  completionText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 30,
    textAlign: "center",
  },
  starsContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  starsEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  starsText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  continueButton: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    marginRight: 10,
    flex: 1,
  },
  rewardsButton: {
    backgroundColor: "#facc15",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    marginLeft: 10,
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
})

export default QuizScreen
