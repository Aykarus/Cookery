import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import {UserContext} from '../contexts/context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const RootScreen = () => {
  const {loggedOn} = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {loggedOn != true ? (
          <Stack.Screen name="SignIn" component={LoginScreen} />
        ) : (
          <Stack.Screen name="Home" component={MainScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootScreen;

const styles = StyleSheet.create({});
