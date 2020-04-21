import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodScreen from './FoodScreen';
import RecipieDetailsScreen from './RecipieDetailsScreen';

const FoodStack = createStackNavigator();

const FoodStackScreen = () => {
  return (
    <FoodStack.Navigator>
      <FoodStack.Screen name="Food Search" component={FoodScreen} />
      <FoodStack.Screen
        name="Recipie Details"
        component={RecipieDetailsScreen}
      />
    </FoodStack.Navigator>
  );
};

export default FoodStackScreen;

const styles = StyleSheet.create({});
