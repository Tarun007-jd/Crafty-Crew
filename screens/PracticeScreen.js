import React from "react"
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import LottieView from 'lottie-react-native'


const PracticeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Practice English Sign Language</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("QuizScreen")}
        >
          <LottieView
            source={require("../assets/motion_quizflip_loop.json")} autoPlay loop={true} style={{width:150, height: 150}} />
          <Text style={styles.cardText}>Take a Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SignMirrorScreen")}
        >
          <LottieView 
            source={require("../assets/Digital Camera.json")} autoPlay loop={true} style={{width:150, height: 150}}  />
          <Text style={styles.cardText}>AI Sign Mirror</Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 20,
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
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: "#374151",
    fontWeight: "bold",
    fontFamily: "Sniglet",
  },
})


export default PracticeScreen
