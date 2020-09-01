import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './template/Login';
import SignUp from './template/SignUp';
import Feed from './template/Feed';
const AuthContext = React.createContext();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: "#63b370",
              height: 50,
              
            },
            headerTintColor: '#fff',
            safeAreaInsets: { top: 0 }

          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'SignUp',
            headerStyle: {
              backgroundColor: "#63b370",
              height: 50,
              
            },
            headerTintColor: '#fff',
            safeAreaInsets: { top: 0 }

          }}
        />
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ header = null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create();

export default App;
