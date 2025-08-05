import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Video } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

// Intermediate level videos - Greetings and Body Parts
import GoodMorning from '../assets/TestGreetings/good morning.mp4';
import GoodNight from '../assets/TestGreetings/good night.mp4';
import Namaste from '../assets/TestGreetings/namaste.mp4';
import ThankYou from '../assets/TestGreetings/Thankyou.mp4';
import Ear from '../assets/Testpartsofbody/ear.mp4';
import Eye from '../assets/Testpartsofbody/eye.mp4';
import Forehead from '../assets/Testpartsofbody/forehead.mp4';
import Nose from '../assets/Testpartsofbody/nose.mp4';

const quizData = [
  {
    question: 'What greeting is being shown?',
    Video: GoodMorning,
    options: ['Good Evening', 'Good Morning', 'Good Afternoon', 'Good Night'],
    answer: 'Good Morning',
  },
  {
    question: 'What greeting is being shown?',
    Video: GoodNight,
    options: ['Good Night', 'Good Morning', 'Good Bye', 'Sleep Well'],
    answer: 'Good Night',
  },
  {
    question: 'What traditional greeting is this?',
    Video: Namaste,
    options: ['Hello', 'Namaste', 'Welcome', 'Goodbye'],
    answer: 'Namaste',
  },
  {
    question: 'What polite expression is being shown?',
    Video: ThankYou,
    options: ['Please', 'Sorry', 'Thank You', 'Excuse Me'],
    answer: 'Thank You',
  },
  {
    question: 'Which body part is being indicated?',
    Video: Ear,
    options: ['Eye', 'Nose', 'Ear', 'Mouth'],
    answer: 'Ear',
  },
  {
    question: 'Which body part is being indicated?',
    Video: Eye,
    options: ['Eye', 'Eyebrow', 'Eyelash', 'Forehead'],
    answer: 'Eye',
  },
  {
    question: 'Which body part is being indicated?',
    Video: Forehead,
    options: ['Head', 'Hair', 'Forehead', 'Scalp'],
    answer: 'Forehead',
  },
  {
    question: 'Which body part is being indicated?',
    Video: Nose,
    options: ['Mouth', 'Nose', 'Chin', 'Cheek'],
    answer: 'Nose',
  },
];



const EnglishQuizIntermediate = (
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
      <Text style={styles.title1}>English Quiz - Intermediate</Text>
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

export default EnglishQuizIntermediate;
