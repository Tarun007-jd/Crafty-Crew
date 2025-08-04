import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Video } from "expo-av"
import { LinearGradient } from "expo-linear-gradient"

// Tamil Videos
import AUyir from '../assets/UyirEluthukkal/a.mp4';
import AAUyir from '../assets/UyirEluthukkal/aa.mp4';
import IUyir from '../assets/UyirEluthukkal/i.mp4';
import EUyir from '../assets/UyirEluthukkal/e.mp4';
import KaMei from '../assets/MeiYeluthu/க்.mp4';
import NgaMei from '../assets/MeiYeluthu/ங்.mp4';
import One from '../assets/tamilnum/1.mp4';
import Two from '../assets/tamilnum/2.mp4';
import Five from '../assets/tamilnum/5.mp4';
import Six from '../assets/tamilnum/6.mp4';
import Amma from '../assets/tfamily/amma.mp4';
import Appa from '../assets/tfamily/appa.mp4';

const quizData = [
  {
    question: 'இது எந்த உயிரெழுத்து?',
    Video: AUyir,
    options: ['அ', 'ஆ', 'இ', 'ஈ'],
    answer: 'அ',
  },
  {
    question: 'இது எந்த உயிரெழுத்து?',
    Video: AAUyir,
    options: ['அ', 'ஆ', 'இ', 'ஈ'],
    answer: 'ஆ',
  },
  {
    question: 'இது எந்த உயிரெழுத்து?',
    Video: IUyir,
    options: ['அ', 'ஆ', 'இ', 'ஈ'],
    answer: 'இ',
  },
  {
    question: 'இது எந்த உயிரெழுத்து?',
    Video: EUyir,
    options: ['எ', 'ஏ', 'ஐ', 'ஒ'],
    answer: 'எ',
  },
  {
    question: 'இது எந்த மெய்யெழுத்து?',
    Video: KaMei,
    options: ['க்', 'ங்', 'ச்', 'ஞ்'],
    answer: 'க்',
  },
  {
    question: 'இது எந்த எண்?',
    Video: One,
    options: ['ஒன்று', 'இரண்டு', 'மூன்று', 'நான்கு'],
    answer: 'ஒன்று',
  },
  {
    question: 'இது எந்த எண்?',
    Video: Five,
    options: ['மூன்று', 'நான்கு', 'ஐந்து', 'ஆறு'],
    answer: 'ஐந்து',
  },
  {
    question: 'இது எந்த குடும்ப உறுப்பினர்?',
    Video: Amma,
    options: ['அம்மா', 'அப்பா', 'அக்கா', 'அண்ணன்'],
    answer: 'அம்மா',
  },
];



const TamilQuizAdvanced = (
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
          <Text style={styles.title}>உங்கள் மதிப்பெண்</Text>
          <Text style={styles.score}>{score} / {quizData.length}</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleRestart}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>மீண்டும் தொடங்கு</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonhome} onPress={() => navigation.navigate("HomeScreenTamil")}>
            <Text style={styles.buttonText}>முகப்பு</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }


  const question = quizData[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>தமிழ் வினாடி வினா</Text>
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

export default TamilQuizAdvanced;
