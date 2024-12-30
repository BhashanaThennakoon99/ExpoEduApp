import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson4Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 4: Styling in React Native</Text>
      <Text style={styles.content}>
        Learn how to style your application using the StyleSheet API and flexbox layout.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson3')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson5')}
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
