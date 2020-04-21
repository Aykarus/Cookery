import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {set} from 'react-native-reanimated';

const myHeart = <Icon name="rocket" size={30} color="#900" />;

const FoodCard = ({recipie, navigaton}) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [heart, setHeart] = useState(
    <Icon name="heart-o" size={20} color="#000000" />,
  );

  function like() {
    if (likeStatus === true) {
      setLikeStatus(!likeStatus);
      setHeart(<Icon name="heart-o" size={20} color="#000000" />);
    } else {
      setLikeStatus(!likeStatus);
      setHeart(<Icon name="heart" size={20} color="#FD4659" />);
    }
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigaton.navigate('Recipie Details', recipie)}>
        <Image style={styles.imageBanner} source={{uri: recipie.image}} />
      </TouchableOpacity>

      <View style={styles.cardContent}>
        <Text style={styles.titleText}>{recipie.title}</Text>
        <View style={styles.likes}>
          {/* <Text>{likeStatus.toString()}</Text> */}
          <TouchableOpacity onPress={like}>{heart}</TouchableOpacity>
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
    flex: 1,
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
    flex: 1,
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
