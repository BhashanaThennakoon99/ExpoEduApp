import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Lesson1Screen from './screens/Lesson1Screen';
import Lesson2Screen from './screens/Lesson2Screen';
import Lesson3Screen from './screens/Lesson3Screen';
import Lesson4Screen from './screens/Lesson4Screen';
import Lesson5Screen from './screens/Lesson5Screen';
import Lesson6Screen from './screens/Lesson6Screen';
import Lesson7Screen from './screens/Lesson7Screen';
import Lesson8Screen from './screens/Lesson8Screen';
import Lesson9Screen from './screens/Lesson9Screen';
import Lesson10Screen from './screens/Lesson10Screen';
import Quiz1Screen from './screens/Quiz1Screen';
import Quiz2Screen from './screens/Quiz2Screen';
import Quiz3Screen from './screens/Quiz3Screen';
import Quiz4Screen from './screens/Quiz4Screen';
import Quiz5Screen from './screens/Quiz5Screen';
import Quiz6Screen from './screens/Quiz6Screen';
import Quiz7Screen from './screens/Quiz7Screen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lesson1" component={Lesson1Screen} />
        <Stack.Screen name="Lesson2" component={Lesson2Screen} />
        <Stack.Screen name="Lesson3" component={Lesson3Screen} />
        <Stack.Screen name="Lesson4" component={Lesson4Screen} />
        <Stack.Screen name="Lesson5" component={Lesson5Screen} />
        <Stack.Screen name="Lesson6" component={Lesson6Screen} />
        <Stack.Screen name="Lesson7" component={Lesson7Screen} />
        <Stack.Screen name="Lesson8" component={Lesson8Screen} />
        <Stack.Screen name="Lesson9" component={Lesson9Screen} />
        <Stack.Screen name="Lesson10" component={Lesson10Screen} />
        <Stack.Screen name="Quiz1" component={Quiz1Screen} />
        <Stack.Screen name="Quiz2" component={Quiz2Screen} />
        <Stack.Screen name="Quiz3" component={Quiz3Screen} />
        <Stack.Screen name="Quiz4" component={Quiz4Screen} />
        <Stack.Screen name="Quiz5" component={Quiz5Screen} />
        <Stack.Screen name="Quiz6" component={Quiz6Screen} />
        <Stack.Screen name="Quiz7" component={Quiz7Screen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
