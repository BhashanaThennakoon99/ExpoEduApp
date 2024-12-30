import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const question = {
  question: "What is React Native?",
  options: ["A library for web development", "A framework for mobile apps", "A database"],
  correctAnswer: 1,
};

export default function Quiz1Screen({ navigation }) {
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (index) => {
    if (index === question.correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect! The correct answer is " + question.options[question.correctAnswer]);
    }

    setTimeout(() => {
      setFeedback(null);
      navigation.navigate('Quiz2'); // Navigate to the next quiz
    }, 2000); // Show feedback for 1 second before navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz 1</Text>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(index)} />
      ))}
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  feedback: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
});
