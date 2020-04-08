import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import FoodCard from '../component/FoodCard';
import RecipieDetailsScreen from './RecipieDetailsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
// import LoginFrom from '../component/LoginForm';

const FoodScreen = ({navigation}) => {
  const [recipies, setRecipies] = useState([
    {
      id: '1',
      title: 'Guf" Danish Ice Cream Topping',
      img: 'https://spoonacular.com/recipeImages/631781-556x370.jpg',
    },
    {
      id: '2',
      title: 'zest orange',
      img: 'https://spoonacular.com/recipeImages/653977-556x370.jpg',
    },
    {
      id: '3',
      title: 'Dulce De Leche Cheesecake',
      img: 'https://spoonacular.com/recipeImages/1335193-556x370.jpg',
    },
    {
      id: '4',
      title: 'Applesauce Cake',
      img: 'https://spoonacular.com/recipeImages/632632-556x370.jpg',
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={recipies}
        renderItem={({item}) => (
          <FoodCard recipie={item} navigator={navigation} />
        )}
        keyExtractor={item => item.id}
        // ListHeaderComponent={LoginFrom}
      />
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
});
