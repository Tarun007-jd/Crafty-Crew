import { Video } from "lucide-react"
import A from "../assets/AlpabetVideos/A.mp4"
import B from "../assets/AlpabetVideos/B.mp4"
import C from "../assets/AlpabetVideos/C.mp4"
import D from "../assets/AlpabetVideos/D.mp4"
import E from "../assets/AlpabetVideos/E.mp4"
import F from "../assets/AlpabetVideos/F.mp4"
import G from "../assets/AlpabetVideos/G.mp4"
import H from "../assets/AlpabetVideos/H.mp4"
import I from "../assets/AlpabetVideos/I.mp4"
import J from "../assets/AlpabetVideos/J.mp4"
import K from "../assets/AlpabetVideos/K.mp4"
import L from "../assets/AlpabetVideos/L.mp4"
import M from "../assets/AlpabetVideos/M.mp4"
import N from "../assets/AlpabetVideos/N.mp4"
import O from "../assets/AlpabetVideos/O.mp4"
import P from "../assets/AlpabetVideos/P.mp4"
import Q from "../assets/AlpabetVideos/Q.mp4"
import R from "../assets/AlpabetVideos/R.mp4"
import S from "../assets/AlpabetVideos/S.mp4"
import T from "../assets/AlpabetVideos/T.mp4"
import U from "../assets/AlpabetVideos/U.mp4"
import V from "../assets/AlpabetVideos/V.mp4"
import W from "../assets/AlpabetVideos/W.mp4"
import X from "../assets/AlpabetVideos/X.mp4"
import Y from "../assets/AlpabetVideos/Y.mp4"
import Z from "../assets/AlpabetVideos/Z.mp4"
import Goodafternoon from "../assets/GreetingsVideos/Goodafternoon.mp4"
import Hello from "../assets/GreetingsVideos/Hello.mp4"
import ThankYou from "../assets/GreetingsVideos/ThankYou.mp4"
import Goodbye from "../assets/GreetingsVideos/Goodbye.mp4"
import Goodevening from "../assets/GreetingsVideos/Goodevening.mp4"
import Goodnight from "../assets/GreetingsVideos/Goodnight.mp4"
import welcome from "../assets/GreetingsVideos/welcome.mp4"
import Hi from "../assets/GreetingsVideos/Hi.mp4"
import Seeyouagain from "../assets/GreetingsVideos/Seeyouagain.mp4"
import Seeyoutomorrow from "../assets/GreetingsVideos/Seeyoutomorrow.mp4"
import Goodmorning from "../assets/GreetingsVideos/Goodmorning.mp4"
import Namaste from "../assets/GreetingsVideos/Namaste.mp4"

import Cave from "../assets/GeoVideos/Cave.mp4"
import Cloud from "../assets/GeoVideos/Cloud.mp4"
import Cyclone from "../assets/GeoVideos/Cyclone.mp4"
import Forest from "../assets/GeoVideos/Forest.mp4"
import Hail from "../assets/GeoVideos/Hail.mp4"
import Hill from "../assets/GeoVideos/Hill.mp4"
import Island from "../assets/GeoVideos/Island.mp4"
import Lake from "../assets/GeoVideos/Lake.mp4"
import Moon from "../assets/GeoVideos/Moon.mp4"
import Mountain from "../assets/GeoVideos/Mountain.mp4"
import Peak from "../assets/GeoVideos/Peak.mp4"
import Plain from "../assets/GeoVideos/Plain.mp4"
import Pond from "../assets/GeoVideos/Pond.mp4"
import Rain from "../assets/GeoVideos/Rain.mp4"
import Rainbow from "../assets/GeoVideos/Rainbow.mp4"
import River from "../assets/GeoVideos/River.mp4"
import Sea from "../assets/GeoVideos/Sea.mp4"
import Sky from "../assets/GeoVideos/Sky.mp4"
import SnowFall from "../assets/GeoVideos/Snowfall.mp4"
import Spring from "../assets/GeoVideos/Spring.mp4"
import Star from "../assets/GeoVideos/Star.mp4"
import Summer from "../assets/GeoVideos/Summer.mp4"
import Sun from "../assets/GeoVideos/Sun.mp4"
import Thunder from "../assets/GeoVideos/Thunder.mp4"
import Valley from "../assets/GeoVideos/Valley.mp4"
import Volcano from "../assets/GeoVideos/Volcano.mp4"
import Waterfalls from "../assets/GeoVideos/Waterfalls.mp4"
import Wave from "../assets/GeoVideos/Wave.mp4"
import Wind from "../assets/GeoVideos/Wind.mp4"
import Winter from "../assets/GeoVideos/Winter.mp4"



export const levelData = {
  basic: [
    { id: "alphabets", name: "Alphabets", icon: "🔤", color: "#ffa5a5ff", completed: false },
    { id: "numbers", name: "Numbers", icon: "🔢", color: "#99c1f4ff", completed: false },
    { id: "science", name: "Science", icon: "🔬", color: "#70cc93ff", completed: false },
  ],
  intermediate: [
    { id: "greetings", name: "Greetings", icon: "👋", color: "#a78bfa", completed: false },
    { id: "math", name: "Addition & Subtraction", icon: "➕", color: "#fb923c", completed: false },
    { id: "fruits", name: "Fruits", icon: "🍎", color: "#f472b6", completed: false },
  ],
  advanced: [
    { id: "sentences", name: "Parts of Body", icon: "💬", color: "#818cf8", completed: false },
    { id: "multiplication", name: "Multiplication & Division", icon: "✖️", color: "#2dd4bf", completed: false },
    { id: "geography", name: "Geography", icon: "🌍", color: "#facc15", completed: false },
  ],
}

export const signLanguageContent = {

  geography:[
      {letter: "Cave", Video: Cave, description: "A natural underground space large enough for a human to enter" },
      {letter: "Cloud", Video: Cloud, description: "A visible mass of condensed water vapor floating in the atmosphere" },
      {letter: "Cyclone", Video: Cyclone, description: "A large scale air mass that rotates around a strong center of low atmospheric pressure" },
      {letter: "Forest", Video: Forest, description: "A large area covered chiefly with trees and undergrowth" },
      {letter: "Hail", Video: Hail, description: "Pellets of frozen rain that fall in showers from cumulonimbus clouds" },
      {letter: "Hill", Video: Hill, description: "A naturally raised area of land, not as high or craggy as a mountain" },
      {letter: "Island", Video: Island, description: "A piece of land surrounded by water" },
      {letter: "Lake", Video: Lake, description: "A large body of water surrounded by land" },
      {letter: "Moon", Video: Moon, description: "Earth's only natural satellite, visible at night" },
      {letter: "Mountain", Video: Mountain, description: "A large landform that rises prominently above its surroundings, typically having a peak" },
      {letter: "Peak", Video: Peak, description: "The pointed top of a mountain" },
      {letter: "Plain", Video: Plain, description: "A large area of flat land with few trees" },
      {letter: "Pond", Video: Pond, description: "A small body of still water, smaller than a lake" },
      {letter: "Rain", Video: Rain, description: "Water droplets that fall from clouds to the ground" },
      {letter: "Rainbow", Video: Rainbow, description: "A meteorological phenomenon caused by reflection, refraction, and dispersion of light in water droplets" },
      {letter: "River", Video: River, description: "A large natural stream of water flowing in a channel toward a sea, lake, or another river" },
      {letter: "Sea", Video: Sea, description: "A large body of saltwater smaller than an ocean, partially enclosed by land" },
      {letter: "Sky", Video: Sky, description: "The region of the atmosphere and outer space seen from the Earth" },
      {letter: "Snow Fall", Video: SnowFall, description: "Precipitation in the form of ice crystals that fall from clouds" },
      {letter: "Spring", Video: Spring, description: "The season after winter and before summer, characterized by warmer weather and blooming flowers" },
      {letter: "Star", Video: Star, description: "A luminous celestial body visible in the night sky" },
      {letter: "Summer", Video: Summer, description: "The warmest season of the year, following spring and preceding autumn" },
      {letter: "Sun", Video: Sun, description: "The star at the center of our solar system, providing light and heat to the Earth" },
      {letter: "Thunder", Video: Thunder, description: "The sound caused by lightning during a storm" },
      {letter: "Valley", Video: Valley, description: "A low area of land between hills or mountains, often with a river running through it" },
      {letter: "Volcano", Video: Volcano, description: "An opening in the Earth's crust through which molten lava, ash, and gases are ejected" },
      {letter: "Waterfalls", Video: Waterfalls, description: "A flow of water over a vertical drop or cliff" },
      {letter: "Wave", Video: Wave, description: "A disturbance that travels through space and matter, often seen in water" },
      {letter: "Wind", Video: Wind, description: "The movement of air caused by differences in atmospheric pressure" },
      {letter: "Winter", Video: Winter, description: "The coldest season of the year, following autumn and preceding spring" },
    
  ],
  greetings: [
      {letter: "Hi",              Video: Hi, description: "Place your hand on"},
      {letter: "Hello",           Video: Hello ,description: "Wave your hand to greet someone" },
      {letter: "Welcome",         Video: welcome, description: "Place your hand on"},
      {letter: "Good Morning",    Video: Goodmorning, description: "Place your hand on"},
      {letter:"Good Afternoon",   Video: Goodafternoon,description:"good and sunset"},
      {letter: "Good Evening",    Video: Goodevening, description: "Place your hand on"},
      {letter: "ThankYou",        Video: ThankYou, description: "Place your hand on"},
      {letter: "Good Bye",        Video: Goodbye, description: "Place your hand on"},
      {letter: "Good Night",      Video: Goodnight, description: "Place your hand on"},
      {letter: "See You Again",   Video: Seeyouagain, description: "Place your hand on"},
      {letter: "See You Tomorrow",Video: Seeyoutomorrow, description: "Place your hand on"},
      {letter: "Namaste",         Video: Namaste, description: "Place your hands together in front of your chest" },
     ],

  alphabets: [
    { letter: "A", Video: A, description: "Make a fist with thumb on the side" },
    { letter: "B", Video: B, description: "Open hand with fingers together, thumb across palm" },
    { letter: "C", Video: C, description: "Curved hand like holding a cup" },
    { letter: "D", Video: D, description: "Index finger up, other fingers folded" },
    { letter: "E", Video: E, description: "Open hand with fingers spread" },
    { letter: "F", Video: F, description: "Thumb and index finger touching, other fingers extended" },
    { letter: "G", Video: G, description: "Thumb and pinky extended, other fingers folded" },
    { letter: "H", Video: H, description: "Index and pinky fingers extended, other fingers folded" },
    { letter: "I", Video: I, description: "Peace sign with palm facing out" },
    { letter: "J", Video: J, description: "Wave hand with palm facing out" },
    { letter: "K", Video: K, description: "Open hand with"},
    { letter: "L", Video: L, description: "Thumb and index finger forming an L shape" },
    { letter: "M", Video: M, description: "Thumb, index, and middle finger up" },
    { letter: "N", Video: N, description: "Index and middle finger up, other fingers folded" },
    { letter: "O", Video: O, description: "Fingers forming an O shape" },
    { letter: "P", Video: P, description: "Fist with thumb extended" },
    { letter: "Q", Video: Q, description: "Open hand with fingers spread" },
    { letter: "R", Video: R, description: "Curved hand like holding a cup" },
    { letter: "S", Video: S, description: "Make a fist with thumb on the side" },
    { letter: "T", Video: T, description: "Open hand with fingers together, thumb across palm" },
    { letter: "U", Video: U, description: "Thumb and pinky extended, other fingers folded" },
    { letter: "V", Video: V, description: "Peace sign with palm facing out" },
    { letter: "W", Video: W, description: "Open hand with fingers spread" },
    { letter: "X", Video: X, description: "Thumb and index finger forming an X shape" },
    { letter: "Y", Video: Y, description: "Thumb, index, and middle finger up" },
    { letter: "Z", Video: Z, description: "Index and pinky fingers extended, other fingers folded" },

  ],
  numbers: [
    { number: "1", sign: "☝️", description: "Point index finger up" },
    { number: "2", sign: "✌️", description: "Peace sign with palm facing out" },
    { number: "3", sign: "👌", description: "Thumb, index, and middle finger up" },
    { number: "4", sign: "🤘", description: "Index and middle finger up, other fingers folded" },
    { number: "5", sign: "🖐️", description: "Open hand with fingers spread" },
    { number: "6", sign: "👌", description: "Fingers forming an O shape" },
    { number: "7", sign: "✊", description: "Make a fist with thumb on the side" },
    { number: "8", sign: "🤟", description: "Thumb and index finger forming an L shape" },
    { number: "9", sign: "🤙", description: "Thumb and pinky extended, other fingers folded" },
    { number: "10", sign: "🤚", description: "Open hand with fingers spread" },
  ],
}

export const levelColors = {
  basic: "#4ade80",
  intermediate: "#facc15",
  advanced: "#f87171",
}

export const levelEmojis = {
  basic: "🌱",
  intermediate: "🌿",
  advanced: "🌳",
}
