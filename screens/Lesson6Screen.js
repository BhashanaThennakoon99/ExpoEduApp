import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson6Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 6: Event Handling</Text>
      <Text style={styles.content}>
        React Native allows you to handle user interactions using event handlers like onPress, onChangeText, and others.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson5')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson7')}
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
