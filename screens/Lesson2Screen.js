import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson2Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 2: Setting up React Native</Text>
      <Text style={styles.content}>
        Learn how to set up your development environment for React Native, including Node.js, Android Studio, and more.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson1')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson3')}
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
