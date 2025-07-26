import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView}   // Correct import name
 from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Light, Attractive Background */}
      <LinearGradient
        colors={['#f5f7fa', '#c3cfe2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <View style={styles.profileImageContainer}>
              <LinearGradient
                colors={['#ffd3b6', '#ffaaa5']}
                style={styles.profileImageGradient}
              >
                <Ionicons name="person" size={60} color="#fff" />
              </LinearGradient>
            </View>
            <Text style={styles.welcomeText}>Welcome To Your Profile</Text>
            <Text style={styles.subtitleText}>Your Studies Going Great! 🎉</Text>
          </View>

          {/* Stats Section */}
          <LinearGradient
            colors={['#ffffff', '#f0f4f7']}
            style={styles.statsContainer}
          >
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Total Lessons</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0%</Text>
              <Text style={styles.statLabel}>Progress</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Achievements</Text>
            </View>
          </LinearGradient>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <LinearGradient
                colors={['#a1ffce', '#faffd1']}
                style={styles.menuItemGradient}
              >
                <MaterialIcons name="account-circle" size={24} color="#333" />
                <Text style={styles.menuItemText}>Edit Profile</Text>
                <Ionicons name="chevron-forward" size={20} color="#333" />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <LinearGradient
                colors={['#ffecd2', '#fcb69f']}
                style={styles.menuItemGradient}
              >
                <MaterialIcons name="analytics" size={24} color="#333" />
                <Text style={styles.menuItemText}>Progress Report</Text>
                <Ionicons name="chevron-forward" size={20} color="#333" />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <LinearGradient
                colors={['#d3cce3', '#e9e4f0']}
                style={styles.menuItemGradient}
              >
                <MaterialIcons name="help" size={24} color="#333" />
                <Text style={styles.menuItemText}>Contact Info</Text>
                <Ionicons name="chevron-forward" size={20} color="#333" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => alert("Logout Clicked")}
          >
            <LinearGradient
              colors={['#ff9a9e', '#fecfef']}
              style={styles.logoutGradient}
            >
              <MaterialIcons name="logout" size={24} color="#fff" />
              <Text style={styles.logoutText}>Logout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradientBackground: { flex: 1 },
  scrollContent: { paddingBottom: 30 },
  headerSection: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30
  },
  profileImageContainer: { marginBottom: 20 },
  profileImageGradient: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 12
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8
  },
  subtitleText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center"
  },
  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6
  },
  statItem: { flex: 1, alignItems: "center" },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#667eea",
    marginBottom: 4
  },
  statLabel: { fontSize: 14, color: "#666", fontWeight: "500" },
  statDivider: {
    width: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10
  },
  menuContainer: { paddingHorizontal: 20, marginBottom: 30 },
  menuItem: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5
  },
  menuItemGradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 15
  },
  logoutButton: {
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5
  },
  logoutGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 18
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10
  }
});

export default ProfileScreen;
