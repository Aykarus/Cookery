import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import fruitsImg from '../static/images/Fruits.jpg';
import tableImg from '../static/images/Table.jpg';
import juiceImg from '../static/images/Juice.jpg';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

//Hardcoded items for homepage
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Recipie 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Recipie 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Recipie 3',
  },
];

function Item({title}) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const HomeScreen = () => {
  return (
    // <ImageBackground source={juiceImg} style={{width: '100%', height: '100%'}}>
    <View style={styles.center}>
      <Text style={styles.light}>Profile</Text>
      <TouchableOpacity>
        <Image
          style={styles.profile}
          source={{uri: 'https://api.adorable.io/avatars/285/Cookery.png'}}
        />
      </TouchableOpacity>

      <Text style={styles.favorites}>Favorites</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
    // </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 100,
  },
  light: {
    // color: '#FFFFFF',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 285,
  },
  favorites: {
    alignSelf: 'flex-start',
    padding: 20,
  },
  item: {
    padding: 20,
    paddingLeft: 150,
    paddingRight: 150,
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
