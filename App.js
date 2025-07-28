import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar" 
import { LogBox } from "react-native"
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';



// Import screens
import SplashScreen from "./screens/SplashScreen"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import HomeScreenGujarati from "./screens/HomeScreenGujarati"
import ModulesScreen from "./screens/ModulesScreen"
import LearningScreen from "./screens/LearningScreen"
import QuizScreen from "./screens/QuizScreen"
import RewardsScreen from "./screens/RewardsScreen"
import SettingsScreen from "./screens/SettingsScreen"
import PracticeScreenEnglish from "./screens/PracticeScreenEnglish"
import PracticeScreenGujarati from "./screens/PracticeScreenGujarati"
import ProfileScreen from "./screens/ProfileScreenEnglish"
import BasicModuleGujarati from "./screens/BasicModuleGujarati";
import IntermediateModuleGujarati from "./screens/IntemediateModuleGujarati";
import AdvancedModuleGujarati from "./screens/AdvancedModuleGujarati";


// Ignore specific warnings
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"])

const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    Sniglet: require("./assets/fonts/Sniglet/Sniglet-Regular.ttf"),
  })

  

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right", // 👈 Adds left-to-right slide
          gestureDirection: "horizontal", //
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreenGujarati" component={HomeScreenGujarati} />
        <Stack.Screen name="PracticeScreenEnglish" component={PracticeScreenEnglish} />
        <Stack.Screen name="PracticeScreenGujarati" component={PracticeScreenGujarati} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="Modules" component={ModulesScreen} />
        <Stack.Screen name="Learning" component={LearningScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="BasicModuleGujarati" component={BasicModuleGujarati} />
        <Stack.Screen name="IntermediateModuleGujarati" component={IntermediateModuleGujarati} />
        <Stack.Screen name="AdvancedModuleGujarati" component={AdvancedModuleGujarati} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
