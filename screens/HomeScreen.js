import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import fruitsImg from '../static/images/Fruits.jpg';
import tableImg from '../static/images/Table.jpg';
import juiceImg from '../static/images/Juice.jpg';

const HomeScreen = () => {
  return (
    // <ImageBackground source={juiceImg} style={{width: '100%', height: '100%'}}>
    <View style={styles.center}>
      <Text style={styles.light}>Welcome</Text>
    </View>
    // </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  light: {
    // color: '#FFFFFF',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
