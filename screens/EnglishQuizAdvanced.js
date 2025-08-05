import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Video } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

// Advanced level videos - Fruits and Science & Geography
import Apple from '../assets/TestFruits/apple.mp4';
import Banana from '../assets/TestFruits/banana.mp4';
import Grapes from '../assets/TestFruits/grapes.mp4';
import Pineapple from '../assets/TestFruits/pineapple.mp4';
import Moon from '../assets/TestScience&geography/moon.mp4';
import Rainbow from '../assets/TestScience&geography/rainbow.mp4';
import Wave from '../assets/TestScience&geography/wave.mp4';
import Wind from '../assets/TestScience&geography/wind.mp4';

const quizData = [
  {
    question: 'Which fruit is being demonstrated?',
    Video: Apple,
    options: ['Orange', 'Apple', 'Peach', 'Cherry'],
    answer: 'Apple',
  },
  {
    question: 'Which tropical fruit is being shown?',
    Video: Banana,
    options: ['Mango', 'Banana', 'Papaya', 'Coconut'],
    answer: 'Banana',
  },
  {
    question: 'Which clustered fruit is being demonstrated?',
    Video: Grapes,
    options: ['Berries', 'Grapes', 'Cherries', 'Raisins'],
    answer: 'Grapes',
  },
  {
    question: 'Which exotic fruit is being shown?',
    Video: Pineapple,
    options: ['Pineapple', 'Durian', 'Dragon Fruit', 'Star Fruit'],
    answer: 'Pineapple',
  },
  {
    question: 'Which celestial body is being represented?',
    Video: Moon,
    options: ['Sun', 'Star', 'Moon', 'Planet'],
    answer: 'Moon',
  },
  {
    question: 'Which natural phenomenon is being demonstrated?',
    Video: Rainbow,
    options: ['Lightning', 'Rainbow', 'Aurora', 'Sunset'],
    answer: 'Rainbow',
  },
  {
    question: 'Which water movement is being shown?',
    Video: Wave,
    options: ['Current', 'Tide', 'Wave', 'Tsunami'],
    answer: 'Wave',
  },
  {
    question: 'Which weather element is being demonstrated?',
    Video: Wind,
    options: ['Rain', 'Snow', 'Wind', 'Hail'],
    answer: 'Wind',
  },
];



const EnglishQuizAdvanced = (
  { navigation, route }
) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  
  const handleOptionPress = (option) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const handleLogin = () => {
    // Validate credentials here (e.g. API call)
    // If successful, navigate to Home
    navigation.replace('HomeScreen');
  };


  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container2}>
        <LinearGradient colors={["#03e1faff", "#69f696ff", "#f191eaff"]} style={styles.gradient}>
        <Text style={styles.title}>Your Score</Text>
        <Text style={styles.score}>{score} / {quizData.length}</Text>
        <TouchableOpacity 
        style={styles.button} 
        onPress={handleRestart}
        activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonhome} onPress={() => navigation.navigate("HomeScreen", { 
          userProgress: route.params?.userProgress, 
          stars: route.params?.stars 
        })}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }


  const question = quizData[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>English Quiz - Advanced</Text>
          <Video
                source={question.Video}
                style={{ width: 350, height: 350, borderRadius: 12,paddingBottom: 10,paddingTop: 10 }}
                resizeMode="contain"
                isLooping
                shouldPlay
                isMuted     
              />
      <Text style={styles.question}>{question.question}</Text>
      <FlatList
        data={question.options}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === item && (item === question.answer
                ? styles.correctOption
                : styles.wrongOption
              ),
            ]}
            onPress={() => handleOptionPress(item)}
            disabled={selectedOption !== null}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.progress}>{currentQuestion + 1} / {quizData.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  gradient:{
  flex: 1,
  padding: 100,
  paddingVertical: 280,
  paddingHorizontal: 130,
  justifyContent: 'center',
  alignItems: 'center',

  },
  title: {
    fontSize: 30,
    top: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 32,
    color: "#374151",
    fontFamily: "Sniglet",
    paddingTop: 80,
    paddingBottom: 1,
  },
  question: {
    fontSize: 26,
    top:1,
    marginBottom: 5,
    textAlign: 'left',
  },
  option: {
    backgroundColor: '#feda8cff',
    padding: 16,
    width: 250,
    top: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 22,
  },
  correctOption: {
    backgroundColor: '#a5d6a7',
  },
  wrongOption: {
    backgroundColor: '#ef9a9a',
  },
  score: {
    fontSize: 40,
    top: 20,
    marginBottom: 30,
    color: '#fa3d3dff',
    textAlign: 'center',
    fontFamily: "Sniglet",
  },
  button: {
    backgroundColor: '#f4e96bff',
    padding: 12,
    marginTop: 20,
    borderRadius: 7,
  },
  buttonhome: {
    backgroundColor: '#87f906ff',
    padding: 12,
    borderRadius: 7,
    marginTop: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  progress: {
    bottom: 50,
    marginTop: 20,
    fontSize: 17,
    color: '#777',
  },
});

export default EnglishQuizAdvanced;
