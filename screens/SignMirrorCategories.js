import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

const categories = [
  { id: "1", title: "Alphabets", icon: "language" },
  { id: "2", title: "Numbers", icon: "calculator-outline" },
  { id: "3", title: "Greetings", icon: "chatbubbles-outline" },
]

const SignMirrorCategories = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("SignMirror", { category: item.title })}
    >
      <Ionicons name={item.icon} size={48} color="#ffffff" />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <LinearGradient colors={[ '#d1fae5', '#dbeafe']} style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
       <Text style={styles.header}>Real-Time Sign Practice with AI</Text>
       <Text style={styles.subHeader}>Choose a category and start learning with live AI feedback</Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardContainer}
      />
    </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 65,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 20,
        textAlign: "center",
        fontFamily: "Sniglet",
    },
    cardContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    subHeader: {
        fontSize: 16,
        color: "#374151",
        width: 250,
        marginBottom: 30,
        textAlign: "center",
        fontFamily: "Sniglet",
        alignSelf: "center",
    },
    card: {
        backgroundColor: "#3b82f6",
        width: 350,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 6,
        elevation: 7,
    },
    cardTitle: {
        marginTop: 10,
        fontSize: 20,
        color: "#ffffff",
        fontWeight: "bold",
        fontFamily: "Sniglet",
    },
})

// Wrap your content in LinearGradient in the component:

export default SignMirrorCategories
