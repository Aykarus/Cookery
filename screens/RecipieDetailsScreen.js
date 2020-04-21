import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

const RecipieDetailsScreen = ({route, navigation}) => {
  const {title, image, instructions, analyzedInstructions} = route.params;
  const [steps, setsteps] = useState([
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
  ]);
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <Image style={styles.imageBanner} source={{uri: image}} />
            </View>

            <View style={styles.padding}>
              <Text style={styles.title}>{title + '\n\n'}</Text>
              <Text>Instructions: {'\n\n' + instructions}</Text>
              <Text>{'\n\n'}</Text>
              <Text style={styles.title}>Step By Step: {'\n'}</Text>
            </View>
          </>
        }
        data={analyzedInstructions[0].steps}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text>Step {item.number}:</Text>
              <Text>{'\n' + item.step}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.number.toString()}
      />
    </SafeAreaView>
  );
};

export default RecipieDetailsScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageBanner: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  container: {
    // flex: 1,
    // justifyContent: 'flex-start',
    flexDirection: 'row',
    // backgroundColor: '#7a42f4',
  },
  title: {
    fontSize: 20,
    padding: 5,
  },
  padding: {
    padding: 14,
  },
  card: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    // flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 18,
    marginVertical: 20,
    // paddingTop: 14,
  },
});
