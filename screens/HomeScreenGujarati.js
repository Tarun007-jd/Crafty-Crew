"use client"

import { useState, useEffect } from "react"
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"
import { levelData, levelColors, levelEmojis } from "../constants/Data"

const { width } = Dimensions.get("window")

const HomeScreenGujarati = ({ navigation, route }) => {
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
    const modules = userProgress[level] || []
    const completedModules = modules.filter((m) => m.completed).length
    return modules.length > 0 ? (completedModules / modules.length) * 100 : 0
  }

  const renderLevelCard = (level, title, subtitle, navTarget, color, emoji) => {
    const percentage = getProgressPercentage(level)

    return (
      <TouchableOpacity
        key={level}
        style={[styles.levelCard, { backgroundColor: color }]}
        onPress={() => navigation.navigate(navTarget, { level, userProgress, setUserProgress })}  
        activeOpacity={0.9}
      >
        <View style={styles.cardInner}>
          <Text style={styles.levelEmoji}>{emoji}</Text>
          <Text style={styles.levelTitle}>{title}</Text>
          <Text style={styles.levelSubtitle}>{subtitle}</Text>

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
      <LinearGradient colors={["#f9e1ffff", "#b2ffcdff"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image source={require("../assets/Logo.png")} style={styles.logoImage} />
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
              onPress={() => navigation.navigate("HomeScreenTamil")}
              style={[
                styles.languageTab,
                route.name === "HomeScreenTamil" && styles.activeTab,
              ]}
            >
              <Text style={styles.languageText}>தமிழ்</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreenGujarati")}
              style={[
                styles.languageTab,
                route.name === "HomeScreenGujarati" && styles.activeTab,
              ]}
            >
              <Text style={styles.languageText}>ગુજરાતી</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.levelsContainer}>
            {renderLevelCard("basic", "Basic Level", "Learn the fundamentals", "BasicModuleGujarati", levelColors.basic[0], levelEmojis.basic)}
            {renderLevelCard("intermediate", "Intermediate Level", "Enhance your skills", "IntermediateModuleGujarati", levelColors.intermediate[0], levelEmojis.intermediate)}
            {renderLevelCard("advanced", "Advanced Level", "Achieve mastery", "AdvancedModuleGujarati", levelColors.advanced[0], levelEmojis.advanced)}
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.rewardsButton}
              onPress={() => navigation.navigate("RewardsScreen", { stars, userProgress })}
            >
              <Ionicons name="trophy" size={24} color="#ffffff" />
              <Text style={styles.buttonText}>Rewards ({stars} ⭐)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <Ionicons name="settings" size={24} color="#4b5563" />
              <Text style={styles.buttonTextDark}>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreenGujarati")} style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#374151" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("PracticeScreenGujarati")} style={styles.navButton}>
          <Ionicons name="book-outline" size={24} color="#374151" />
          <Text style={styles.navLabel}>Practice</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreenEnglish")} style={styles.navButton}>
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
    color: "#6d4c41",
    fontFamily: "Sniglet",
  },
  subtitleText: {
    fontSize: 14,
    color: "#8d6e63",
    marginTop: 4,
    fontFamily: "Sniglet",
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
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#000",
  },
  languageText: {
    fontSize: 16,
    fontWeight: "Bold",
    fontFamily: "Sniglet",
  },
  levelsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  levelCard: {
    borderRadius: 20,
    padding: 28,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardInner: {
    alignItems: "center",
    width: "100%",
  },
  levelEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  levelTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3e2723",
    fontFamily: "Sniglet",
  },
  levelSubtitle: {
    fontSize: 14,
    color: "#5d4037",
    marginTop: 6,
    fontFamily: "Sniglet",
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    width: "100%",
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginRight: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#388e3c",
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    width: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  rewardsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff6f00",
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

export default HomeScreenGujarati
