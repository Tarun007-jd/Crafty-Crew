import React from "react"
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const PracticeScreenGujarati = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Let's Practice Gujarati Signs!</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <Ionicons name="help-circle-outline" size={40} color="#3b82f6" />
          <Text style={styles.cardText}>Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SignMirrorScreen")}
        >
          <Ionicons name="camera-outline" size={40} color="#10b981" />
          <Text style={styles.cardText}>SignMirror</Text>
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

export default PracticeScreenGujarati
