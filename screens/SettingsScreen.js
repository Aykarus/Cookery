import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../contexts/context';

const SettingsScreen = () => {
  const {loggedOn, toogleLogin} = useContext(UserContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={toogleLogin}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text>About App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    marginTop: 48,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#7a42f4',
  },
  // container: {
  //   flex: 1,
  //   marginTop: Constants.statusBarHeight,
  // },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#7a42f4',
    borderBottomWidth: 2,
  },
});
