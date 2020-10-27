import React, { useState, useEffect } from 'react';
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
import AsyncStorage from "@react-native-community/async-storage"
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [userData, _SetUserData] = useState(null);
  const setUserData = async (userData) => {
    await AsyncStorage.setItem("userData", JSON.stringify(userData))
    setIsAuth(true);
  };
  const getUserData = async () => {
      const userData = await AsyncStorage.getItem("userData");
      return JSON.parse(userData);
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ?
          (
            <Stack.Screen
              name="Main"
              component={Main}
              initialParams={{setIsAuth, getUserData}}
              options={
                {
                  header: (props) => <View></View>,
                }
              }
            />
          )
          :
          (
            <React.Fragment>
              <Stack.Screen
                name="Login"
                component={Login}
                initialParams={{setUserData: setUserData}}
                options={{
                  headerShown: false
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
            </React.Fragment>
          )}

      </Stack.Navigator>
    </NavigationContainer>



  );
};

const styles = StyleSheet.create();

export default App;
