import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

const PracticeScreenEnglish = ({ navigation }) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Practice English Sign Language</Text>

      <LottieView
        source={require("../assets/Man and Woman say Hi !.json")}
        autoPlay
        loop
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("EQuizLevel")}
        >
          <LottieView
            source={require("../assets/motion_quizflip_loop.json")}
            autoPlay
            loop
            style={{ width: 150, height: 100 }}
          />
          <Text style={styles.cardText}>Take a Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SignMirrorCategories")}
        >
          <LottieView
            source={require("../assets/Digital Camera.json")}
            autoPlay
            loop
            style={{ width: 150, height: 150 }}
          />
          <Text style={styles.cardText}>AI Sign Mirror</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
     
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={styles.navButton}
          >
            <Ionicons
              name={route.name === "HomeScreen" ? "home" : "home-outline"}
              size={26}
              color={route.name === "HomeScreen" ? "#065f46" : "#6b7280"}
            />
            <Text style={styles.navLabel}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PracticeScreenEnglish")}
            style={styles.navButton}
          >
            <Ionicons
              name={
                route.name === "PracticeScreenEnglish"
                  ? "book"
                  : "book-outline"
              }
              size={24}
              color={
                route.name === "PracticeScreenEnglish"
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 5,
    fontFamily: "Sniglet",
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 20,
    color: "#374151",
    fontWeight: "bold",
    fontFamily: "Sniglet",
  },
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
    backgroundColor: "transparent",
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
});

export default PracticeScreenEnglish;
