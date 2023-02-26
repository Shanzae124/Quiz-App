import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppName = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{heading}</Text>
    </View>
  );
};

export default AppName;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: '#00cec9',
    paddingVertical: 25,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontStyle: 'italic',
    paddingTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});
