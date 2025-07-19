import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { LogBox } from "react-native"

// Import screens
//import SplashScreen from "./screens/SplashScreen"
import HomeScreen from "./screens/HomeScreen"
//import LevelsScreen from "./screens/LevelsScreen"
import ModulesScreen from "./screens/ModulesScreen"
import LearningScreen from "./screens/LearningScreen"
import QuizScreen from "./screens/QuizScreen"
import RewardsScreen from "./screens/RewardsScreen"
import SettingsScreen from "./screens/SettingsScreen"

// Ignore specific warnings
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"])

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
     <Stack.Navigator
        // initialRouteName="Splash"
         screenOptions={{
         headerShown: false,
        
         }}
      >
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Modules" component={ModulesScreen} />
        <Stack.Screen name="Learning" component={LearningScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
