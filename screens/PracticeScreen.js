import React from "react"
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const PracticeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Practice Gujarati Sign Language</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <Ionicons name="help-circle-outline" size={40} color="#064e3b" />
          <Text style={styles.cardText}>Take a Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SignMirrorScreen")}
        >
          <Ionicons name="camera-outline" size={40} color="#064e3b" />
          <Text style={styles.cardText}>AI Sign Mirror</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecfdf5",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#065f46",
    fontFamily: "Sniglet",
    marginBottom: 30,
    textAlign: "center",
  },
  cardsContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  card: {
    flex: 1,
    backgroundColor: "#d1fae5",
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  cardText: {
    marginTop: 12,
    fontSize: 30,
    color: "#065f46",
    fontFamily: "Sniglet",
    fontWeight: "bold",
  },
})

export default PracticeScreen
