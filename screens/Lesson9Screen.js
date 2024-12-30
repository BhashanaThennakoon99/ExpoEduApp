import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson9Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 9: Animations</Text>
      <Text style={styles.content}>
        Enhance user experience with animations using libraries like React Native Reanimated or the built-in Animated API.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson8')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson10')}
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
