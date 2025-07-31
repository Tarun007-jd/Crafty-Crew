import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Video } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

import Hello from '../assets/GreetingsVideos/Hello.mp4'; // Adjust the path as necessary
import A from '../assets/AlpabetVideos/A.mp4'; // Adjust the path as necessary
import Six from '../assets/Numbers/Six.mp4'; // Adjust the path as necessary

const quizData = [

  {
    question: 'What is the sign ?',
    Video: Hello,
    options: ['Seed', 'He', 'Apple', 'Cat'],
    answer: 'He',
  },
  {
    question: 'What is the sign ?',
    Video:A,
    options: ['I', 'K', 'A', 'Q'],
    answer: 'A',
  },
  {
    question: 'What is the sign ?',
    Video: Six,
    options: ['Five', 'Two', 'One', 'Six'],
    answer: 'Six',
  },
];



const TamilQuiz = (
  { navigation }
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
          <TouchableOpacity style={styles.buttonhome} onPress={() => navigation.navigate("HomeScreen")}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }


  const question = quizData[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>English Quiz</Text>
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

export default TamilQuiz;
