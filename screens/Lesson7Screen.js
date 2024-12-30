import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson7Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 7: Networking</Text>
      <Text style={styles.content}>
        Networking in React Native involves fetching data from APIs using tools like fetch or Axios.
      </Text>
      <Button
        title="Previous Lesson"
        onPress={() => navigation.navigate('Lesson6')}
      />
      <Button
        title="Next Lesson"
        onPress={() => navigation.navigate('Lesson8')}
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
