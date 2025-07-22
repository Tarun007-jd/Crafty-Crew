import React from "react"
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const PracticeScreenEnglish = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Practice English Sign Language</Text>

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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#065f46",
    fontFamily: "Sniglet",
    marginBottom: 30,
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "column",
    paddingTop: 150,
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
    marginTop: 12,
    fontSize: 30,
    color: "#065f46",
    fontFamily: "Sniglet",
    fontWeight: "bold",
  },
})

export default PracticeScreenEnglish
