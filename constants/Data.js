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



export const levelData = {
  basic: [
    { id: "alphabets", name: "Alphabets", icon: "🔤", color: "#f87171", completed: false },
    { id: "numbers", name: "Numbers", icon: "🔢", color: "#60a5fa", completed: false },
    { id: "science", name: "Science", icon: "🔬", color: "#4ade80", completed: false },
  ],
  intermediate: [
    { id: "greetings", name: "Greetings", icon: "👋", color: "#a78bfa", completed: false },
    { id: "math", name: "Addition & Subtraction", icon: "➕", color: "#fb923c", completed: false },
    { id: "fruits", name: "Fruits", icon: "🍎", color: "#f472b6", completed: false },
  ],
  advanced: [
    { id: "sentences", name: "Sentences", icon: "💬", color: "#818cf8", completed: false },
    { id: "multiplication", name: "Multiplication", icon: "✖️", color: "#2dd4bf", completed: false },
    { id: "geography", name: "Geography", icon: "🌍", color: "#facc15", completed: false },
  ],
}

export const signLanguageContent = {
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
