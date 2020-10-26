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
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './template/Login';
import SignUp from './template/SignUp';
import Main from './template/Main';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options= {{
            headerShown:false
          }
          }
          
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: "#63b370",
              height: 50,
            },
            headerTintColor: '#fff',
            
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={
            {
              header: (props) => <View></View>,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create();

export default App;
