import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const question = {
  question: "What is the default file extension for a React component?",
  options: [".jsx", ".js", ".react"],
  correctAnswer: 0,
};

export default function Quiz6Screen({ navigation }) {
  const [feedback, setFeedback] = useState(null);

  const handleAnswer = (index) => {
    if (index === question.correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect! The correct answer is " + question.options[question.correctAnswer]);
    }

    setTimeout(() => {
      setFeedback(null);
      navigation.navigate('Quiz7');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz 6</Text>
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