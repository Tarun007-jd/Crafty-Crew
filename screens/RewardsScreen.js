import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { levelData } from "../constants/Data";
import { useState, useEffect } from "react";

const RewardsScreen = ({ navigation, route }) => {
  // get initial data
  const { userProgress = levelData } = route.params || {};

  // state for stars, recalculated whenever userProgress changes
  const [stars, setStars] = useState(0);

  useEffect(() => {
    // calculate total stars (3 per completed module)
    let total = 0;
    Object.values(userProgress).forEach((modules) => {
      modules.forEach((m) => {
        if (m.completed) total += 3;
      });
    });
    setStars(total);
  }, [userProgress]);

  const renderLevelProgress = (level) => {
    const modules = userProgress[level];
    const completedModules = modules.filter((m) => m.completed).length;
    const totalModules = modules.length;

    return (
      <View key={level} style={styles.levelCard}>
        <Text style={styles.levelTitle}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </Text>
        <View style={styles.starsRow}>
          {modules.map((module, index) => (
            <Text key={index} style={styles.starIcon}>
              {module.completed ? "⭐" : "⚪"}
            </Text>
          ))}
        </View>
        <Text style={styles.progressText}>
          {completedModules}/{totalModules} completed
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#facc15", "#fb923c", "#ef4444"]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Text style={styles.title}>My Rewards</Text>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.totalStarsContainer}>
            <Text style={styles.trophyEmoji}>🏆</Text>
            <Text style={styles.totalStarsText}>Total Stars: {stars}</Text>
            <Text style={styles.encouragementText}>
              Keep learning to earn more!
            </Text>
          </View>

          <View style={styles.levelsContainer}>
            {["basic", "intermediate", "advanced"].map((level) =>
              renderLevelProgress(level)
            )}
          </View>

          <View style={styles.homeButtonContainer}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => navigation.navigate("HomeScreen")}
              activeOpacity={0.8}
            >
              <Ionicons name="home" size={20} color="white" />
              <Text style={styles.homeButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingLeft: 125,
    paddingTop: 50,
    paddingBottom: 10,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "white", flex: 1 },
  scrollView: { flex: 1 },
  totalStarsContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  trophyEmoji: { fontSize: 80, marginBottom: 15 },
  totalStarsText: { fontSize: 24, fontWeight: "bold", color: "white", marginBottom: 5 },
  encouragementText: { fontSize: 16, color: "rgba(255, 255, 255, 0.9)", textAlign: "center" },
  levelsContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  levelCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  levelTitle: { fontSize: 20, fontWeight: "bold", color: "white", marginBottom: 15 },
  starsRow: { flexDirection: "row", justifyContent: "center", marginBottom: 10 },
  starIcon: { fontSize: 24, marginHorizontal: 2 },
  progressText: { fontSize: 14, color: "rgba(255, 255, 255, 0.8)" },
  homeButtonContainer: { 
    alignItems: "center", 
    paddingHorizontal: 20, 
    paddingBottom: 30, 
    paddingTop: 20 
  },
  homeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  homeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default RewardsScreen;
