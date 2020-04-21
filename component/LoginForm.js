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
import auth from '@react-native-firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const {loggedOn, toogleLogin} = useContext(UserContext);
  const [logStatus, setLog] = useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function signIn() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        toogleLogin();
        console.log('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setLog('That email address is invalid!');
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/wrong-password') {
          setLog('That email address and password do not match');
          console.log('That email address and password do not match');
        }
      });
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // auth()
  //   .createUserWithEmailAndPassword(
  //     'sarah.lane@gmail.com',
  //     'SuperSecretPassword!',
  //   )
  //   .then(() => {
  //     console.log('User account created & signed in!');
  //   })
  //   .catch(error => {
  //     if (error.code === 'auth/email-already-in-use') {
  //       console.log('That email address is already in use!');
  //     }

  //     if (error.code === 'auth/invalid-email') {
  //       console.log('That email address is invalid!');
  //     }

  //     console.error(error);
  //   });

  return (
    <View style={styles.center}>
      {/* <Text style={styles.title}>Login</Text> */}
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          underlineColorAndroid="transparent"
          placeholder=" Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder=" Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={e => setPassword(e)}
        />
      </View>

      <TouchableOpacity style={styles.loginbutton} onPress={signIn}>
        <Text style={{color: '#ffffff', fontSize: 14, fontWeight: 'bold'}}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>{logStatus.toString()}</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
  title: {
    margin: 15,
    height: 40,
    textAlign: 'center',
    color: '#7a42f4',
    // color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loginbutton: {
    margin: 15,
    height: 40,
    width: 100,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7a42f4',
  },
  container: {
    // backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    // alignItems: 'center',
    width: 300,
  },
});
