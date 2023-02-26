import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppName from '../Components/AppName';
import questions from '../Data/question';

const Quiz = ({navigation, route}) => {
  // route.params for using the argument of name of home screen on result screen
  const {name} = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionPress = option => {
    setShowAnswer(true);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };
  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
      name: name,
    });
  };
  const handleNextQuestionPress = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowAnswer(false);
  };
  const handlePreviousQuestionPress = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowAnswer(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View>
        <AppName heading="Quiz" />
      </View>
      <Text style={styles.question}> Q. {currentQuestion.question}</Text>
      {currentQuestion.options.map(option => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() => handleOptionPress(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {showAnswer && (
        <Text style={styles.answer}>
          The answer is: {currentQuestion.answer}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        {currentQuestionIndex < questions.length - 1 && (
          <TouchableOpacity
            style={styles.Question}
            onPress={handleNextQuestionPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex < questions.length - 1 && (
          <TouchableOpacity
            style={styles.Question}
            onPress={handlePreviousQuestionPress}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        {currentQuestionIndex === questions.length - 1 && (
          <TouchableOpacity style={styles.Question} onPress={handleShowResult}>
            <Text style={styles.buttonText}>End</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#91ABC9',
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  buttonText: {
    color: '#702963',
    fontSize: 20,
    // fontStyle: 'italic',
    fontWeight: '900',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    border: 'white',
    marginBottom: 20,
    color: '#702963',
  },
  option: {
    color: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',

    padding: 10,
    margin: 10,
    border: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
  },
  Question: {
    backgroundColor: 'white',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  answer: {
    color: 'black',
    fontSize: 20,
  },
});
