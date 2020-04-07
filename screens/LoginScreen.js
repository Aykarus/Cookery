import React from 'react';
import {View, Text} from 'react-native';
import LoginForm from '../component/LoginForm';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
      <LoginForm></LoginForm>
    </View>
  );
};

export default LoginScreen;
