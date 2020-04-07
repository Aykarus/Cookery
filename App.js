import * as React from 'react';
import {Text, View} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import {UserContextProvider} from './contexts/context';
import RootScreen from './screens/RootScreen';

const App = () => {
  return (
    <UserContextProvider>
      <RootScreen />
    </UserContextProvider>
  );
};

export default App;
