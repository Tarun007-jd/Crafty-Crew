"use client"

import { useState, useEffect } from "react"
import { View,Image, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { levelData, levelColors, levelEmojis } from "../constants/Data"
import { AlignLeft } from "lucide-react"


const { width } = Dimensions.get("window")

const HomeScreen = ({ navigation }) => {
  const [userProgress, setUserProgress] = useState(levelData)
  const [stars, setStars] = useState(0)

  useEffect(() => {
    // Calculate total stars
    let totalStars = 0
    Object.values(userProgress).forEach((modules) => {
      modules.forEach((module) => {
        if (module.completed) totalStars += 3
      })
    })
    setStars(totalStars)
  }, [userProgress])

  const getProgressPercentage = (level) => {
    const modules = userProgress[level]
    const completedModules = modules.filter((m) => m.completed).length
    return (completedModules / modules.length) * 100
  }

  const renderLevelCard = (level, index) => {
    const percentage = getProgressPercentage(level)

    return (
      <TouchableOpacity
        key={level}
        style={styles.levelCard}
        onPress={() => navigation.navigate("Modules", { level, userProgress, setUserProgress })}
        activeOpacity={0.8}
      >
        <LinearGradient colors={[levelColors[level], levelColors[level] + "80"]} style={styles.levelGradient}>
          <Text style={styles.levelEmoji}>{levelEmojis[level]}</Text>
          <Text style={styles.levelTitle}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
          <Text style={styles.levelSubtitle}>
            {level === "basic"
              ? "Start your journey!"
              : level === "intermediate"
                ? "Build your skills!"
                : "Master the art!"}
          </Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${percentage}%` }]} />
            </View>
            <Text style={styles.progressText}>{Math.round(percentage)}%</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#3b82f6", "#8b5cf6", "#ec4899"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
          <Image
      source={require('../assets/Logo.png')}
      style={styles.logoImage}
          />
  
            {/* <Text style={styles.logo}>Logo</Text> */}
            <Text style={styles.welcomeText}>  Welcome Back! 🌟</Text>
            <Text style={styles.subtitleText}>Choose your learning adventure</Text>
          </View>

          <View style={styles.levelsContainer}>
            {["basic", "intermediate", "advanced"].map((level, index) => renderLevelCard(level, index))}
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.rewardsButton}
              onPress={() => navigation.navigate("Rewards", { stars, userProgress })}
              activeOpacity={0.8}
            >
              <Ionicons name="trophy" size={24} color="white" />
              <Text style={styles.buttonText}>My Rewards ({stars} ⭐)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate("Settings")}
              activeOpacity={0.8}
            >
              <Ionicons name="settings" size={24} color="white" />
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  logo:{
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  logoImage: {
  position: 'absolute',
          // adjust as needed
  top: 40,           // adjust as needed
  left: 20,          // adjust as needed
  width: 50,         // diameter of circle
  height: 50,        // diameter of circle
  borderRadius: 25,  // half of width/height for perfect circle
  borderWidth: 2,    // optional: border around circle
  borderColor: 'white',
  resizeMode: 'cover'
},

  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
  },
  levelsContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  levelCard: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  levelGradient: {
    padding: 25,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
  },
  levelEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  levelTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  levelSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 15,
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 4,
    marginRight: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 4,
  },
  progressText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  rewardsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#facc15",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
})

export default HomeScreen
