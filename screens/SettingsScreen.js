import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

const SettingsScreen = ({ navigation }) => {
  const renderSettingCard = (title, options) => (
    <View style={styles.settingCard}>
      <Text style={styles.settingTitle}>{title}</Text>
      <View style={styles.settingOptions}>
        {options.map((option, index) => (
          <View key={index} style={styles.settingOption}>
            <Text style={styles.optionText}>{option.label}</Text>
            <TouchableOpacity style={styles.optionButton} activeOpacity={0.7}>
              <Text style={styles.optionButtonText}>{option.value}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#6b7280", "#4b5563", "#374151"]} style={styles.gradient}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Settings & Help</Text>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.settingsContainer}>
            {/* {renderSettingCard("Audio Settings", [
              // { label: "Sound Effects", value: "On" },
              { label: "Voice Instructions", value: "On" },
            ])} */}

            {renderSettingCard("Parental Controls", [
              { label: "View Progress Report", value: "Open" },
              { label: "Reset Progress", value: "Reset" },
            ])}

            <View style={styles.helpCard}>
              <Text style={styles.helpTitle}>How to Use This App</Text>
              <View style={styles.helpContent}>
                <Text style={styles.helpText}>• Choose your level: Basic, Intermediate, or Advanced</Text>
                <Text style={styles.helpText}>• Select a module to start learning</Text>
                <Text style={styles.helpText}>• Watch the sign language animations</Text>
                <Text style={styles.helpText}>• Complete modules to earn stars</Text>
                <Text style={styles.helpText}>• Take quizzes to test your knowledge</Text>
                <Text style={styles.helpText}>• Collect rewards and track your progress</Text>
              </View>
            </View>
          </View>
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
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    top: 5,
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
    top: 5,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  settingsContainer: {
    top: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  settingCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    backdropFilter: "blur(10px)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  settingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  settingOptions: {
    gap: 15,
  },
  settingOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "white",
  },
  optionButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  optionButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  helpCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    backdropFilter: "blur(10px)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  helpTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  helpContent: {
    gap: 8,
  },
  helpText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 20,
  },
})

export default SettingsScreen
