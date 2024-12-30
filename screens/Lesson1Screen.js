import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 1: Introduction to React Native</Text>
      <Text style={styles.content}>
        React Native is a framework for building mobile applications using JavaScript and React.
      </Text>
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson2')}
      />
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
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
});
