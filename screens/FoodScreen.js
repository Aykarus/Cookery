import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import FoodCard from '../component/FoodCard';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const myHeart = <Icon name="search" size={20} color="#900" />;

const FoodScreen = ({navigation}) => {
  const [recipies, setRecipies] = useState([
    {
      id: '1',
      title: 'Guf" Danish Ice Cream Topping',
      image: 'https://spoonacular.com/recipeImages/631781-556x370.jpg',
      instructions:
        'Put in a greased and floured cake pan. Bake at 325-350 degrees for 1 1/2 hours. Save some cherries and nuts to decorate the top with. This makes a large cake and can be kept in the refrigerator for days.',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Put in a greased and floured cake pan.',
              ingredients: [],
              equipment: [
                {
                  id: 404747,
                  name: 'cake form',
                  image: 'cake-pan.png',
                },
              ],
            },
            {
              number: 2,
              step:
                'Bake at 325-350 degrees for 1 1/2 hours. Save some cherries and nuts to decorate the top with. This makes a large cake and can be kept in the refrigerator for days.',
              ingredients: [
                {
                  id: 9070,
                  name: 'cherries',
                  image: 'cherries.jpg',
                },
                {
                  id: 12135,
                  name: 'nuts',
                  image: 'nuts-mixed.jpg',
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'zest orange',
      image: 'https://spoonacular.com/recipeImages/653977-556x370.jpg',
      instructions:
        'Put in a greased and floured cake pan. Bake at 325-350 degrees for 1 1/2 hours. Save some cherries and nuts to decorate the top with. This makes a large cake and can be kept in the refrigerator for days.',
      analyzedInstructions: [
        {
          name: '',
          steps: [
            {
              number: 1,
              step: 'Put in a greased and floured cake pan.',
              ingredients: [],
              equipment: [
                {
                  id: 404747,
                  name: 'cake form',
                  image: 'cake-pan.png',
                },
              ],
            },
            {
              number: 2,
              step:
                'Bake at 325-350 degrees for 1 1/2 hours. Save some cherries and nuts to decorate the top with. This makes a large cake and can be kept in the refrigerator for days.',
              ingredients: [
                {
                  id: 9070,
                  name: 'cherries',
                  image: 'cherries.jpg',
                },
                {
                  id: 12135,
                  name: 'nuts',
                  image: 'nuts-mixed.jpg',
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
    },
    // {
    //   id: '3',
    //   title: 'Dulce De Leche Cheesecake',
    //   img: 'https://spoonacular.com/recipeImages/1335193-556x370.jpg',
    //   instructions:
    //     'Put in a greased and floured cake pan. Bake at 325-350 degrees for 1 1/2 hours. Save some cherries and nuts to decorate the top with. This makes a large cake and can be kept in the refrigerator for days.',
    // },
    // {
    //   id: '4',
    //   title: 'Applesauce Cake',
    //   img: 'https://spoonacular.com/recipeImages/632632-556x370.jpg',
    //   instructions:
    //     'Put in a greased and floured cake pan. Bake at 325-350 degrees for 1 1/2 hours. Save some cherries and nuts to decorate the top with. This makes a large cake and can be kept in the refrigerator for days.',
    // },
  ]);

  //Comment out to use API
  // useEffect(() => {
  //   fetch(
  //     'https://api.spoonacular.com/recipes/random?number=4&tags=vegetarian,dessert&apiKey=4e1e24294a2946d29a5d082508642059',
  //   )
  //     .then(response => response.json())
  //     .then(json => setRecipies(json.recipes))
  //     .catch(error => console.error(error));
  // }, []);

  function serach(input) {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=1&tags=${input}&apiKey=4e1e24294a2946d29a5d082508642059`,
    )
      .then(response => response.json())
      .then(json => setRecipies(json.recipes))
      .catch(error => console.error(error));

    console.log('searched for ' + input);
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <TextInput
              style={styles.textinput}
              underlineColorAndroid="transparent"
              placeholder={'search'}
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onSubmitEditing={e => serach(e.nativeEvent.text)}
            />
          </>
        }
        stickyHeaderIndices={[0]}
        data={recipies}
        renderItem={({item}) => (
          <FoodCard recipie={item} navigaton={navigation} />
        )}
        keyExtractor={item => item.id.toString()}
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
  textinput: {
    // padding: 30,
    margin: 15,
    height: 40,
    // borderColor: '#7a42f4',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
  },
});
