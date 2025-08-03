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

  const renderLevelCard = (level) => {
    const percentage = getProgressPercentage(level)

    return (
      <TouchableOpacity
        key={level}
        style={[styles.levelCard, { backgroundColor: levelColors[level][0] }]}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("ModulesScreenGujarati", {
            level,
            userProgress,
            setUserProgress,
          })
        }
      >
        <View style={styles.cardInner}>
          <Text style={styles.levelEmoji}>{levelEmojis[level]}</Text>
          <Text style={styles.levelTitle}>
            {level === "basic"
              ? "મૂળભૂત બાબતો"
              : level === "intermediate"
              ? "પ્રગતિ પાથ"
              : level === "advanced"
              ? "નિપુણતા"
              : level.charAt(0).toUpperCase() + level.slice(1)}
          </Text>
          <Text style={styles.levelSubtitle}>
            {level === "basic"
              ? "શીખવાનું શરુ કરીએ!"
              : level === "intermediate"
              ? "સતત પ્રયાસ!"
              : "માઇલસ્ટોન!"}
          </Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${Math.round(percentage)}%` },
                ]}
              />
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Image
              source={require("../assets/Logo.png")}
              style={styles.logoImage}
            />
            <Text style={styles.welcomeText}>પાછા આવવા બદલ આભાર!</Text>
            <Text style={styles.subtitleText}>ચાલો શીખવાનું ચાલુ રાખીએ!</Text>
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
            {["basic", "intermediate", "advanced"].map(renderLevelCard)}
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.rewardsButton}
              onPress={() =>
                navigation.navigate("RewardsScreen", {
                  stars,
                  userProgress,
                })
              }
            >
              <Ionicons name="star" size={20} color="#fff" />
              <Text style={styles.buttonText}>Rewards ({stars} ⭐)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <Ionicons name="settings" size={20} color="#374151" />
              <Text style={styles.buttonTextDark}>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreenGujarati")}
            style={styles.navButton}
          >
            <Ionicons
              name={route.name === "HomeScreenGujarati" ? "home" : "home-outline"}
              size={26}
              color={route.name === "HomeScreenGujarati" ? "#065f46" : "#6b7280"}
            />
            <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("PracticeScreenGujarati")}
            style={styles.navButton}
          >
            <Ionicons
              name={
                route.name === "PracticeScreenGujarati"
                  ? "book"
                  : "book-outline"
              }
              size={24}
              color={
                route.name === "PracticeScreenGujarati"
                  ? "#065f46"
                  : "#6b7280"
              }
            />
            <Text style={styles.navLabel}>Practice</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreenEnglish")}
            style={styles.navButton}
          >
            <Ionicons
              name={
                route.name === "ProfileScreenEnglish"
                  ? "person"
                  : "person-outline"
              }
              size={24}
              color={
                route.name === "ProfileScreenEnglish"
                  ? "#065f46"
                  : "#6b7280"
              }
            />
            <Text style={styles.navLabel}>Profile</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  scrollView: { flexGrow: 1 },
  header: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    color: "#374151",
    fontFamily: "Sniglet",
  },
  subtitleText: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
    fontFamily: "Sniglet",
  },
  languageSwitch: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  languageTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: { borderBottomColor: "#000" },
  languageText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Sniglet",
  },
  levelsContainer: { paddingHorizontal: 20, marginTop: 10 },
  levelCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    elevation: 8,
  },
  cardInner: { alignItems: "center" },
  levelEmoji: { fontSize: 40, marginBottom: 10 },
  levelTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    fontFamily: "Sniglet",
  },
  levelSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginVertical: 8,
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#e8eaed",
    borderRadius: 4,
    marginRight: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#60a5fa",
    borderRadius: 4,
  },
  progressText: { fontSize: 14, fontWeight: "bold", color: "#111827" },
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
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "bold", marginLeft: 8 },
  buttonTextDark: { color: "#374151", fontSize: 16, fontWeight: "bold", marginLeft: 8 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: "#d1d5db",
    backgroundColor: "white",
  },
  navButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#374151",
    marginTop: 2,
  },
})

export default HomeScreenGujarati