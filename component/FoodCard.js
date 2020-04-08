import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {Icon} from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';

const myHeart = <Icon name="rocket" size={30} color="#900" />;

const FoodCard = ({recipie, navigator}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigator.navigate('Recipie Details', recipie)}>
        <Image style={styles.imageBanner} source={{uri: recipie.img}} />
      </TouchableOpacity>

      <View style={styles.cardContent}>
        <Text style={styles.titleText}>{recipie.title}</Text>
        <View style={styles.likes}>
          <TouchableOpacity>
            <Icon name="heart-o" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 20,
  },
  imageBanner: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  titleText: {
    margin: 8,
    fontSize: 14,
    // fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
  likes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
