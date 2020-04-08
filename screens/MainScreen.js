import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="circle-thin" size={30} color="#7a42f4" />;
const mySets = <Icon name="square-o" size={30} color="#7a42f4" />;
const myFood = <Icon name="lemon-o" size={30} color="#7a42f4" />;
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import FoodScreen from './FoodScreen';
import FoodStackScreen from './FoodStackScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7a42f4',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => myIcon,
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodStackScreen}
        options={{
          tabBarLabel: 'Food Search',
          tabBarIcon: () => myFood,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => mySets,
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
