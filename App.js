import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { LogBox } from "react-native"

// Import screens
import SplashScreen from "./screens/SplashScreen"
import HomeScreen from "./screens/HomeScreen"
import HomeScreenGujarati from "./screens/HomeScreenGujarati"
import HomescreenTamil from "./screens/HomescreenTamil"
import ModulesScreen from "./screens/ModulesScreen"
import ModulesScreenTamil from "./screens/ModulesScreenTamil"
import LearningScreen from "./screens/LearningScreen"
import LearningScreenTamil from "./screens/LearningScreenTamil"
import QuizScreen from "./screens/QuizScreen"
import EnglishQuiz from "./screens/EnglishQuiz"
import TamilQuiz from "./screens/TamilQuiz"
import TQuiz from "./screens/TQuiz"
import EQuizLevel from "./screens/EQuizLevel"
import RewardsScreen from "./screens/RewardsScreen"
import SettingsScreen from "./screens/SettingsScreen"
import LoginScreen from "./screens/LoginScreen"
import ProfileScreenEnglish from "./screens/ProfileScreenEnglish"
import PracticeScreenEnglish from "./screens/PracticeScreenEnglish"
import PracticeScreenGujarati from "./screens/PracticeScreenGujarati"
import PracticeScreenTamil from "./screens/PracticeScreenTamil"
import BasicModuleGujarati from "./screens/BasicModuleGujarati"
import IntemediateModuleGujarati from "./screens/IntemediateModuleGujarati"
import AdvancedModuleGujarati from "./screens/AdvancedModuleGujarati"
import SignMirror from "./screens/SignMirror"
import SignMirrorCategories from "./screens/SignMirrorCategories"

// Ignore specific warnings
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"])

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
     <Stack.Navigator
        initialRouteName="Splash"
         screenOptions={{
         headerShown: false,
        
         }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreenGujarati" component={HomeScreenGujarati} />
        <Stack.Screen name="HomeScreenTamil" component={HomescreenTamil} />
        <Stack.Screen name="ModulesScreen" component={ModulesScreen} />
        <Stack.Screen name="ModulesScreenTamil" component={ModulesScreenTamil} />
        <Stack.Screen name="LearningScreen" component={LearningScreen} />
        <Stack.Screen name="LearningScreenTamil" component={LearningScreenTamil} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="EnglishQuiz" component={EnglishQuiz} />
        <Stack.Screen name="TamilQuiz" component={TamilQuiz} />
        <Stack.Screen name="TQuiz" component={TQuiz} />
        <Stack.Screen name="EQuizLevel" component={EQuizLevel} />
        <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ProfileScreenEnglish" component={ProfileScreenEnglish} />
        <Stack.Screen name="PracticeScreenEnglish" component={PracticeScreenEnglish} />
        <Stack.Screen name="PracticeScreenGujarati" component={PracticeScreenGujarati} />
        <Stack.Screen name="PracticeScreenTamil" component={PracticeScreenTamil} />
        <Stack.Screen name="BasicModuleGujarati" component={BasicModuleGujarati} />
        <Stack.Screen name="IntermediateModuleGujarati" component={IntemediateModuleGujarati} />
        <Stack.Screen name="AdvancedModuleGujarati" component={AdvancedModuleGujarati} />
        <Stack.Screen name="SignMirror" component={SignMirror} />
        <Stack.Screen name="SignMirrorCategories" component={SignMirrorCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
