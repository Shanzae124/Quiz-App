import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import questions from '../Data/question';
import AppName from '../Components/AppName';
const Result = ({navigation, route}) => {
  // route.params to get the argument name and score from home and quiz screen on result screen
  const {score} = route.params;
  const {name} = route.params;
  return (
    <View style={styles.resultContainer}>
      <View>
        <AppName heading="RESULT" />
      </View>
      <View>
        <Text style={styles.text}>Quiz Finished!</Text>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/result.jpg')} style={styles.banner} />
      </View>
      <Text style={styles.scoreValue}>
        {name} You scored {score} out of {questions.length}
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 230,
    width: 260,
    borderRadius: 8,
  },
  resultContainer: {
    backgroundColor: '#BDB5D5',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  button: {
    backgroundColor: 'white',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '90%',
    marginTop: '10%',
    marginBottom: 30,
    marginLeft: 20,
  },
  buttonText: {
    color: '#301934',
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    color: '#702963',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
