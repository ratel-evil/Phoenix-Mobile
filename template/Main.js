import React from 'react';
import {View, Text} from 'react-native';
import Feed from './Feed';
import SideMenu from '../components/SideMenu';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Main = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation: drawerNavigation}) => (
        <SideMenu drawerNavigation={drawerNavigation} navigation={navigation} />
      )}
      drawerStyle={{
        marginTop: 100,
      }}>
      <Drawer.Screen
        name="Feed"
        options={{drawerLabel: 'Feed'}}
        component={Feed}
      />
    </Drawer.Navigator>
  );
};

export default Main;
