import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const RecipieDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Recipies Here</Text>
    </View>
  );
};

export default RecipieDetailsScreen;

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
