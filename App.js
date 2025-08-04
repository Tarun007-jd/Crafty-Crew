import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { LogBox } from "react-native"
import { useFonts } from 'expo-font';

// Import screens
import SplashScreen from "./screens/SplashScreen"
import HomeScreen from "./screens/HomeScreen"
import HomeScreenGujarati from "./screens/HomeScreenGujarati"
import HomescreenTamil from "./screens/HomescreenTamil"
import ModulesScreen from "./screens/ModulesScreen"
import ModulesScreenTamil from "./screens/ModulesScreenTamil"
import ModulesScreenGujarati from "./screens/ModulesScreenGujarati"
import LearningScreen from "./screens/LearningScreen"
import LearningScreenTamil from "./screens/LearningScreenTamil"
import LearningScreenGujarati from "./screens/LearningScreenGujarati"
import QuizScreen from "./screens/QuizScreen"
import EnglishQuiz from "./screens/EnglishQuiz"
import EnglishQuizIntermediate from "./screens/EnglishQuizIntermediate"
import EnglishQuizAdvanced from "./screens/EnglishQuizAdvanced"
import TamilQuiz from "./screens/TamilQuiz"
import TamilQuizIntermediate from "./screens/TamilQuizIntermediate"
import TamilQuizAdvanced from "./screens/TamilQuizAdvanced"
import TQuiz from "./screens/TQuiz"
import EQuizLevel from "./screens/EQuizLevel"
import RewardsScreen from "./screens/RewardsScreen"
import SettingsScreen from "./screens/SettingsScreen"
import LoginScreen from "./screens/LoginScreen"
import ProfileScreenEnglish from "./screens/ProfileScreenEnglish"
import ProfileScreenTamil from "./screens/ProfileScreenTamil"
import ProfileScreenGujarati from "./screens/ProfileScreenGujarati"
import PracticeScreenEnglish from "./screens/PracticeScreenEnglish"
import PracticeScreenGujarati from "./screens/PracticeScreenGujarati"
import PracticeScreenTamil from "./screens/PracticeScreenTamil"
import SignMirror from "./screens/SignMirror"
import SignMirrorCategories from "./screens/SignMirrorCategories"


LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"])

const Stack = createNativeStackNavigator()

export default function App() {

    const [fontsLoaded] = useFonts({
    Sniglet: require('./assets/fonts/Sniglet/Sniglet-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
         <Stack.Navigator
          initialRouteName="Splash"
           screenOptions={{
            headerShown: false,}} >

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreenGujarati" component={HomeScreenGujarati} />
        <Stack.Screen name="HomeScreenTamil" component={HomescreenTamil} />
        <Stack.Screen name="ModulesScreen" component={ModulesScreen} />
        <Stack.Screen name="ModulesScreenTamil" component={ModulesScreenTamil} />
        <Stack.Screen name="ModulesScreenGujarati" component={ModulesScreenGujarati} />
        <Stack.Screen name="LearningScreen" component={LearningScreen} />
        <Stack.Screen name="LearningScreenTamil" component={LearningScreenTamil} />
        <Stack.Screen name="LearningScreenGujarati" component={LearningScreenGujarati} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="EnglishQuiz" component={EnglishQuiz} />
        <Stack.Screen name="EnglishQuizIntermediate" component={EnglishQuizIntermediate} />
        <Stack.Screen name="EnglishQuizAdvanced" component={EnglishQuizAdvanced} />
        <Stack.Screen name="TamilQuiz" component={TamilQuiz} />
        <Stack.Screen name="TamilQuizIntermediate" component={TamilQuizIntermediate} />
        <Stack.Screen name="TamilQuizAdvanced" component={TamilQuizAdvanced} />
        <Stack.Screen name="TQuiz" component={TQuiz} />
        <Stack.Screen name="EQuizLevel" component={EQuizLevel} />
        <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ProfileScreenEnglish" component={ProfileScreenEnglish} />
        <Stack.Screen name="ProfileScreenTamil" component={ProfileScreenTamil} />
        <Stack.Screen name="ProfileScreenGujarati" component={ProfileScreenGujarati} />
        <Stack.Screen name="PracticeScreenEnglish" component={PracticeScreenEnglish} />
        <Stack.Screen name="PracticeScreenGujarati" component={PracticeScreenGujarati} />
        <Stack.Screen name="PracticeScreenTamil" component={PracticeScreenTamil} />
        <Stack.Screen name="SignMirror" component={SignMirror} />
        <Stack.Screen name="SignMirrorCategories" component={SignMirrorCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
