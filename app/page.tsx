"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, Award, ArrowLeft, ArrowRight, Star, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Page = "splash" | "home" | "levels" | "modules" | "learning" | "quiz" | "rewards" | "settings"
type Level = "basic" | "intermediate" | "advanced"

interface Module {
  id: string
  name: string
  icon: string
  color: string
  completed: boolean
}

interface LevelData {
  basic: Module[]
  intermediate: Module[]
  advanced: Module[]
}

const levelData: LevelData = {
  basic: [
    { id: "alphabets", name: "Alphabets", icon: "🔤", color: "bg-red-400", completed: false },
    { id: "numbers", name: "Numbers", icon: "🔢", color: "bg-blue-400", completed: false },
    { id: "science", name: "Science", icon: "🔬", color: "bg-green-400", completed: false },
  ],
  intermediate: [
    { id: "greetings", name: "Greetings", icon: "👋", color: "bg-purple-400", completed: false },
    { id: "math", name: "Addition & Subtraction", icon: "➕", color: "bg-orange-400", completed: false },
    { id: "fruits", name: "Fruits", icon: "🍎", color: "bg-pink-400", completed: false },
  ],
  advanced: [
    { id: "sentences", name: "Sentences", icon: "💬", color: "bg-indigo-400", completed: false },
    { id: "multiplication", name: "Multiplication", icon: "✖️", color: "bg-teal-400", completed: false },
    { id: "geography", name: "Geography", icon: "🌍", color: "bg-yellow-400", completed: false },
  ],
}

const signLanguageContent = {
  alphabets: [
    { letter: "A", sign: "✊", description: "Make a fist with thumb on the side" },
    { letter: "B", sign: "🖐️", description: "Open hand with fingers together, thumb across palm" },
    { letter: "C", sign: "🤏", description: "Curved hand like holding a cup" },
  ],
  numbers: [
    { number: "1", sign: "☝️", description: "Point index finger up" },
    { number: "2", sign: "✌️", description: "Peace sign with palm facing out" },
    { number: "3", sign: "🤟", description: "Thumb, index, and middle finger up" },
  ],
}

export default function SignLanguageApp() {
  const [currentPage, setCurrentPage] = useState<Page>("splash")
  const [selectedLevel, setSelectedLevel] = useState<Level>("basic")
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [userProgress, setUserProgress] = useState(levelData)
  const [stars, setStars] = useState(0)

  useEffect(() => {
    if (currentPage === "splash") {
      const timer = setTimeout(() => setCurrentPage("home"), 3000)
      return () => clearTimeout(timer)
    }
  }, [currentPage])

  const navigateTo = (page: Page) => {
    setCurrentPage(page)
  }

  const selectLevel = (level: Level) => {
    setSelectedLevel(level)
    setCurrentPage("modules")
  }

  const selectModule = (module: Module) => {
    setSelectedModule(module)
    setCurrentLessonIndex(0)
    setCurrentPage("learning")
  }

  const completeModule = () => {
    if (selectedModule) {
      const updatedProgress = { ...userProgress }
      const moduleIndex = updatedProgress[selectedLevel].findIndex((m) => m.id === selectedModule.id)
      if (moduleIndex !== -1) {
        updatedProgress[selectedLevel][moduleIndex].completed = true
        setUserProgress(updatedProgress)
        setStars((prev) => prev + 3)
      }
    }
    setCurrentPage("quiz")
  }

  const renderSplashScreen = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="text-8xl mb-4"
      >
        🤟
      </motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl font-bold text-white text-center"
      >
        Sign Language Fun!
      </motion.h1>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl text-white/80 mt-2"
      >
        Learning made easy and fun!
      </motion.p>
    </motion.div>
  )

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-8 pt-8">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome Back! 🌟</h1>
          <p className="text-xl text-white/90">Choose your learning adventure</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {(["basic", "intermediate", "advanced"] as Level[]).map((level, index) => (
            <motion.div
              key={level}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className={`cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  level === "basic" ? "bg-green-400" : level === "intermediate" ? "bg-yellow-400" : "bg-red-400"
                } border-4 border-white shadow-xl`}
                onClick={() => selectLevel(level)}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">
                    {level === "basic" ? "🌱" : level === "intermediate" ? "🌿" : "🌳"}
                  </div>
                  <h3 className="text-2xl font-bold text-white capitalize mb-2">{level}</h3>
                  <p className="text-white/90">
                    {level === "basic"
                      ? "Start your journey!"
                      : level === "intermediate"
                        ? "Build your skills!"
                        : "Master the art!"}
                  </p>
                  <div className="mt-4">
                    <Progress
                      value={(userProgress[level].filter((m) => m.completed).length / userProgress[level].length) * 100}
                      className="h-3"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigateTo("rewards")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg rounded-full"
          >
            <Award className="mr-2" />
            My Rewards ({stars} ⭐)
          </Button>
          <Button
            onClick={() => navigateTo("settings")}
            variant="outline"
            className="bg-white/20 border-white text-white hover:bg-white/30 px-8 py-4 text-lg rounded-full"
          >
            <Settings className="mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  )

  const renderModules = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8 pt-8">
          <Button onClick={() => navigateTo("home")} variant="ghost" className="text-white hover:bg-white/20 mr-4">
            <ArrowLeft className="mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white capitalize">{selectedLevel} Level</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {userProgress[selectedLevel].map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`cursor-pointer transform hover:scale-105 transition-all duration-300 ${module.color} border-4 border-white shadow-xl relative`}
                onClick={() => selectModule(module)}
              >
                {module.completed && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2 border-2 border-white">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{module.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{module.name}</h3>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-white">
                    {module.completed ? "Review" : "Start Learning"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderLearning = () => {
    if (!selectedModule) return null

    const content =
      selectedModule.id === "alphabets"
        ? signLanguageContent.alphabets
        : selectedModule.id === "numbers"
          ? signLanguageContent.numbers
          : [
              {
                letter: selectedModule.name,
                sign: selectedModule.icon,
                description: `Learn about ${selectedModule.name}`,
              },
            ]

    const currentContent = content[currentLessonIndex] || content[0]

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 pt-8">
            <Button onClick={() => navigateTo("modules")} variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="mr-2" />
              Back to Modules
            </Button>
            <h1 className="text-3xl font-bold text-white">{selectedModule.name}</h1>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Volume2 />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <div className="text-center">
              <motion.div
                key={currentLessonIndex}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-9xl mb-6"
              >
                {currentContent.sign}
              </motion.div>
              <h2 className="text-6xl font-bold text-white mb-4">{currentContent.letter || currentContent.number}</h2>
              <p className="text-xl text-white/90 mb-8">{currentContent.description}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Button
              onClick={() => setCurrentLessonIndex(Math.max(0, currentLessonIndex - 1))}
              disabled={currentLessonIndex === 0}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              <ArrowLeft className="mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {content.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentLessonIndex ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>

            {currentLessonIndex < content.length - 1 ? (
              <Button
                onClick={() => setCurrentLessonIndex(currentLessonIndex + 1)}
                className="bg-white/20 hover:bg-white/30 text-white"
              >
                Next
                <ArrowRight className="ml-2" />
              </Button>
            ) : (
              <Button onClick={completeModule} className="bg-green-500 hover:bg-green-600 text-white">
                Complete Module! 🎉
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderQuiz = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="pt-20">
          <div className="text-8xl mb-8">🎉</div>
          <h1 className="text-5xl font-bold text-white mb-4">Congratulations!</h1>
          <p className="text-2xl text-white/90 mb-8">You completed the {selectedModule?.name} module!</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <div className="text-6xl mb-4">⭐⭐⭐</div>
            <p className="text-xl text-white">You earned 3 stars!</p>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={() => navigateTo("modules")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
            >
              Continue Learning
            </Button>
            <Button
              onClick={() => navigateTo("rewards")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg"
            >
              View Rewards
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )

  const renderRewards = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8 pt-8">
          <Button onClick={() => navigateTo("home")} variant="ghost" className="text-white hover:bg-white/20 mr-4">
            <ArrowLeft className="mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white">My Rewards</h1>
        </div>

        <div className="text-center mb-8">
          <div className="text-8xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-white mb-2">Total Stars: {stars}</h2>
          <p className="text-xl text-white/90">Keep learning to earn more!</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(userProgress).map(([level, modules]) => (
            <Card key={level} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white capitalize mb-4">{level}</h3>
                <div className="flex justify-center gap-1 mb-4">
                  {modules.map((module, index) => (
                    <div key={index} className="text-2xl">
                      {module.completed ? "⭐" : "⚪"}
                    </div>
                  ))}
                </div>
                <p className="text-white/80">
                  {modules.filter((m) => m.completed).length}/{modules.length} completed
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8 pt-8">
          <Button onClick={() => navigateTo("home")} variant="ghost" className="text-white hover:bg-white/20 mr-4">
            <ArrowLeft className="mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white">Settings & Help</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Audio Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Sound Effects</span>
                  <Button variant="outline" className="bg-white/20 border-white text-white">
                    On
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Voice Instructions</span>
                  <Button variant="outline" className="bg-white/20 border-white text-white">
                    On
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Parental Controls</h3>
              <div className="space-y-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">View Progress Report</Button>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Reset Progress</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">How to Use This App</h3>
              <div className="text-white/90 space-y-2">
                <p>• Choose your level: Basic, Intermediate, or Advanced</p>
                <p>• Select a module to start learning</p>
                <p>• Watch the sign language animations</p>
                <p>• Complete modules to earn stars</p>
                <p>• Take quizzes to test your knowledge</p>
                <p>• Collect rewards and track your progress</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <div className="font-sans">
      <AnimatePresence mode="wait">
        {currentPage === "splash" && renderSplashScreen()}
        {currentPage === "home" && renderHome()}
        {currentPage === "modules" && renderModules()}
        {currentPage === "learning" && renderLearning()}
        {currentPage === "quiz" && renderQuiz()}
        {currentPage === "rewards" && renderRewards()}
        {currentPage === "settings" && renderSettings()}
      </AnimatePresence>
    </div>
  )
}
