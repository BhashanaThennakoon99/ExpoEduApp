import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson10Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 10: Deployment</Text>
      <Text style={styles.content}>
        Learn how to deploy your React Native app to Android and iOS platforms using tools like Expo or Android Studio.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson9')}
      />
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Congratulations on completing all lessons!
      </Text>
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
