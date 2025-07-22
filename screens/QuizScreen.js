import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const QuizScreen = ({ navigation, route }) => {
  // Handle if route or params are missing
  if (!route || !route.params) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.congratsText, { color: "red" }]}>
            Error: Missing navigation parameters.
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Safely extract route parameters
  const {
    module = {},
    level,
    userProgress,
    setUserProgress,
  } = route.params;

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    if (
      userProgress &&
      setUserProgress &&
      level &&
      module &&
      userProgress[level] &&
      Array.isArray(userProgress[level])
    ) {
      const modules = userProgress[level];
      const idx = modules.findIndex((m) => m.id === module.id);
      if (idx !== -1 && !modules[idx]?.completed) {
        const updatedModules = [...modules];
        updatedModules[idx] = { ...modules[idx], completed: true };
        setUserProgress({ ...userProgress, [level]: updatedModules });
      }
    }
  }, [userProgress, setUserProgress, level, module]);

  const handleLogin = () => {
    // Validate credentials here (e.g. API call)
    // If successful, navigate to Home
    navigation.replace('HomeScreen');
  };

  const totalStars =
    userProgress && typeof userProgress === "object"
      ? Object.values(userProgress)
          .flat()
          .filter((m) => m && m.completed).length * 3
      : 0;

  // Return fallback screen if essential info is missing
  if (!level || !module?.name) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.congratsText, { color: "red" }]}>
            Error: Incomplete data provided for QuizScreen.
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#3becb1ff", "#28d2f8ff", "#a085e1ff"]}
        style={styles.gradient}
      >
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
            <Text style={styles.completionText}>
              You completed the {module.name} module!
            </Text>

            <View style={styles.starsContainer}>
              <Text style={styles.starsEmoji}>⭐⭐⭐</Text>
              <Text style={styles.starsText}>You earned 3 stars!</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleLogin}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Continue Learning</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rewardsButton}
                onPress={() =>
                  navigation.navigate("Rewards", {
                    stars: totalStars,
                    userProgress,
                  })
                }
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>View Rewards</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

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
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    width: "100%",
  },
  celebrationEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  congratsText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  completionText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.93)",
    marginBottom: 24,
    textAlign: "center",
  },
  starsContainer: {
    alignItems: "center",
    marginBottom: 28,
  },
  starsEmoji: {
    fontSize: 46,
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
    backgroundColor: "#5594f9e2",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    marginRight: 6,
    flex: 1,
  },
  rewardsButton: {
    backgroundColor: "#eebe00ec",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    marginLeft: 6,
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default QuizScreen;
