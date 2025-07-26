"use client"

import { useState, useEffect } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { levelData, levelColors, levelEmojis } from "../constants/Data"

const { width } = Dimensions.get("window")

const HomeScreen = ({ navigation,route }) => {
  const [userProgress, setUserProgress] = useState(levelData)
  const [stars, setStars] = useState(0)

  useEffect(() => {
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

  const renderLevelCard = (level) => {
    const percentage = getProgressPercentage(level)

    return (
      <TouchableOpacity
        key={level}
        style={[styles.levelCard, { backgroundColor: levelColors[level] }]}
        onPress={() => navigation.navigate("Modules", { level, userProgress, setUserProgress })}
        activeOpacity={0.9}
      >
        <View style={styles.cardInner}>
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
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#c0f8feff","#fce4ec"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image
              source={require("../assets/Logo.png")}
              style={styles.logoImage}
            />
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.subtitleText}>Let’s continue learning!</Text>
          </View>
            <View style={styles.languageSwitch}>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                style={[
                  styles.languageTab,
                  route.name === "HomeScreen" && styles.activeTab,
                ]}
              >
                <Text style={styles.languageText}>English</Text>
              </TouchableOpacity>
            
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreenGujarati")}
                style={[
                  styles.languageTab,
                  route.name === "HomeScreenGujarati" && styles.activeTab,
                ]}
              >
                <Text style={styles.languageText}>Gujarati</Text>
              </TouchableOpacity>
            </View>

          <View style={styles.levelsContainer}>
            {["basic", "intermediate", "advanced"].map(renderLevelCard)}
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.rewardsButton}
              onPress={() => navigation.navigate("Rewards", { stars, userProgress })}
            >
              <Ionicons name="trophy" size={24} color="#ffffff" />
              <Text style={styles.buttonText}>Rewards ({stars} ⭐)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Ionicons name="settings" size={24} color="#4b5563" />
              <Text style={styles.buttonTextDark}>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
      <View style={styles.bottomNav}>
  <TouchableOpacity
    onPress={() => navigation.navigate("HomeScreen")}
    style={styles.navButton}
  >
    <Ionicons name="home-outline" size={24} color="#374151" />
    <Text style={styles.navLabel}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => navigation.navigate("PracticeScreenEnglish")}
    style={styles.navButton}
  >
    <Ionicons name="book-outline" size={24} color="#374151" />
    <Text style={styles.navLabel}>Practice</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => navigation.navigate("ProfileScreen")}
    style={styles.navButton}
  >
    <Ionicons name="person-outline" size={24} color="#374151" />
    <Text style={styles.navLabel}>Profile</Text>
  </TouchableOpacity>
</View>

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
    paddingBottom: 20,
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ffffff",
    resizeMode: "cover",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "italic",
    color: "#374151",
    fontFamily: "Sniglet", // Use the imported font
  },
  subtitleText: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
    fontFamily: "Sniglet", // Use the imported font
  },
  languageSwitch: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 10,
  marginBottom: 4,
  paddingHorizontal: 20,
},  

languageTab: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderBottomWidth: 2,
  borderBottomColor: "transparent", // default: invisible
},

activeTab: {
  borderBottomColor: "#000", // or any highlight color
},

languageText: {
  fontSize: 16,
  fontWeight: "bold",
  fontFamily: "Sniglet",
},

  levelsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  levelCard: {
    backgroundColor: "#fdfab1ff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#020202ff",
    shadowOpacity: .4,
    shadowOffset: { width: 5, height: 15 },
    shadowRadius: 50,
    elevation: 10,
  },
  cardInner: {
    alignItems: "center",
  },
  levelEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    fontFamily: "Sniglet", // Use the imported font
  },
  levelSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 12,
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
    backgroundColor: "#e5e7eb",
    borderRadius: 4,
    marginRight: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#60a5fa",
    borderRadius: 4,
  },
  progressText: {
    color: "#111827",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  rewardsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f59e0b",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  buttonTextDark: {
    color: "#374151",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },

  bottomNav: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#ffffff",
  paddingVertical: 10,
  borderTopWidth: 1,
  borderColor: "#e5e7eb",
},

navButton: {
  alignItems: "center",
},

navLabel: {
  fontSize: 12,
  color: "#374151",
  marginTop: 2,
  fontFamily: "Sniglet",
},

})

export default HomeScreen
