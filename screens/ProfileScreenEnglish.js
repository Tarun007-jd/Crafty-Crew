import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { BlurView } from "expo-blur"

const ProfileScreenEnglish = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is the Profile Screen</Text>

      <BlurView intensity={50} tint="light" style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={styles.navButton}
        >
          <Ionicons
            name={route?.name === "HomeScreen" ? "home" : "home-outline"}
            size={26}
            color={route?.name === "HomeScreen" ? "#065f46" : "#6b7280"}
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("PracticeScreenEnglish")}
          style={styles.navButton}
        >
          <Ionicons
            name={
              route?.name === "PracticeScreenEnglish"
                ? "book"
                : "book-outline"
            }
            size={24}
            color={
              route?.name === "PracticeScreenEnglish"
                ? "#065f46"
                : "#374151"
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
              route?.name === "ProfileScreenEnglish"
                ? "person"
                : "person-outline"
            }
            size={24}
            color={
              route?.name === "ProfileScreenEnglish"
                ? "#065f46"
                : "#374151"
            }
          />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80, // leave space for nav bar
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    backdropFilter: "blur(20px)", // works only on web, BlurView handles native
  },
  navButton: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#374151",
    marginTop: 2,
    fontWeight: "500",
  },
})

export default ProfileScreenEnglish
