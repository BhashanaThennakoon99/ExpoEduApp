import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson3Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 3: Components in React Native</Text>
      <Text style={styles.content}>
        React Native components are the building blocks of your application. Use them to structure your UI.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson2')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson4')}
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
