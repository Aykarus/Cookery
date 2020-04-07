import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../contexts/context';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loggedOn, toogleLogin} = useContext(UserContext);

  return (
    <View>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.textinput}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.textinput}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={e => setPassword(e)}
      />
      <TouchableOpacity style={styles.loginbutton} onPress={toogleLogin}>
        <Text style={{color: '#ffffff', fontSize: 14, fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>Debug: {loggedOn.toString()}</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textinput: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  title: {
    margin: 15,
    height: 40,
    textAlign: 'center',
    color: '#7a42f4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginbutton: {
    margin: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7a42f4',
  },
});
