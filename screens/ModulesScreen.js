import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

const ModulesScreen = ({ navigation, route }) => {
  const { level, userProgress, setUserProgress } = route.params
  const modules = userProgress[level]

  const selectModule = (module) => {
    navigation.navigate("Learning", {
      module,
      level,
      userProgress,
      setUserProgress,
    })
  }

  const renderModule = (module, index) => {
    return (
      <TouchableOpacity
        key={module.id}
        style={styles.moduleCard}
        onPress={() => selectModule(module)}
        activeOpacity={0.8}
      >
        <View style={[styles.moduleContent, { backgroundColor: module.color }]}>
          {module.completed && (
            <View style={styles.completedBadge}>
              <Ionicons name="star" size={24} color="white" />
            </View>
          )}
          <Text style={styles.moduleEmoji}>{module.icon}</Text>
          <Text style={styles.moduleName}>{module.name}</Text>
          <View style={styles.moduleButton}>
            <Text style={styles.moduleButtonText}>{module.completed ? "Review" : "Start Learning"}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#caf0f8", "#fad2e1"]} style={styles.gradient}>
        <View style={styles.header}>
          {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}> 
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>*/}
          <Text style={styles.title}>{level.charAt(0).toUpperCase() + level.slice(1)} Level</Text>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.modulesContainer}>{modules.map((module, index) => renderModule(module, index))}</View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
  
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 15,
  },
  backText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  title: {
    top:30,
    color:"#33415c",
    paddingBottom: 30,
    fontSize: 32,
    fontWeight: "bold",
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  modulesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  moduleCard: {
    marginBottom: 30,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#02e7fcff",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2.25,
    shadowRadius: 5.84,
  },
  moduleContent: {
    padding: 25,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    position: "relative",
  },
  completedBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#facc15",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  moduleEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  moduleName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  moduleButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
  },
  moduleButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default ModulesScreen
