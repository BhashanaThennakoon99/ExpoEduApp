import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson8Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 8: Navigation</Text>
      <Text style={styles.content}>
        Advanced navigation in React Native includes using stack navigators, tab navigators, and drawer navigators.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson7')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson9')}
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
