import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppName from '../Components/AppName';

const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const start = () => {
    if (!name) {
      alert('Please enter your name.');
      return;
    } else navigation.navigate('Quiz', {name: name});
  };
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.headingText}>ShaShe Quiz</Text>
      <AppName heading="Home" />
      <View style={styles.container}>
        <Image source={require('../assets/Image.jpg')} style={styles.banner} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter Your Name"
        />
      </View>
      <TouchableOpacity onPress={start} style={styles.start}>
        <Text style={styles.startText}> Start </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 210,
    width: 270,
    borderRadius: 8,
  },
  homeContainer: {
    backgroundColor: '#96C9DC',
    height: '100%',
  },
  startText: {
    color: '#3498db',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  headingText: {
    paddingTop: 20,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  start: {
    backgroundColor: 'white',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    width: '90%',
    marginBottom: 30,
    marginLeft: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: '10%',
    // marginBottom: 12,
  },

  input: {
    fontSize: 16,
    fontStyle: 'italic',
    width: '70%',
    height: 50,
    borderColor: '#61A0AF',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    color: '#084f83',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
});
