import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson5Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 5: State Management</Text>
      <Text style={styles.content}>
        Understand state management and how to manage data with hooks like useState.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson4')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson6')}
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
