import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 40,
  },
});
