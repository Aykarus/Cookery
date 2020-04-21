import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import LoginForm from '../component/LoginForm';
import fruitsImg from '../static/images/Fruits.jpg';
import tableImg from '../static/images/Table.jpg';
import juiceImg from '../static/images/Juice.jpg';

const LoginScreen = () => {
  return (
    <ImageBackground source={fruitsImg} style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Cookery.</Text>
        <LoginForm />
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: '20%',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
});
