import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const StepbyStep = () => {
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
        data={steps}
        renderItem={({item}) => (
          <View>
            <Text>
              {'\n'}Step{item.number}:
            </Text>
            <Text>{'\n' + item.step}</Text>
          </View>
        )}
        keyExtractor={item => item.number.toString()}
      />
    </SafeAreaView>
  );
};

export default StepbyStep;

const styles = StyleSheet.create({});
