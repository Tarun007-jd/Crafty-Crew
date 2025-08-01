import React from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { gujaratiLevelData } from "../constants/Data"

const IntermediateModuleGujarati = ({ navigation, route }) => {
  const inetermediateModules = gujaratiLevelData.intermediate

  const handleModulePress = (module) => {
    navigation.navigate("LearningScreen", {
      module, 
      level: "intermediate",
      lessonIndex: 0, 
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Intermediate Modules</Text>
      <FlatList
        data={inetermediateModules}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]} onPress={() => handleModulePress(item)}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e1",
    padding: 20,
    gap: 10
  },
  title: {
    fontSize: 28,
    marginTop: 50,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    marginTop: 10,
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default IntermediateModuleGujarati

