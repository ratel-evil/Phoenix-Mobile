import React from 'react';
import { View, Text } from 'react-native';
import Feed from './Feed'
import SideMenu from '../components/SideMenu'

import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator()


const Main = ({ route, navigation }) => {
    const {setIsAuth, getUserData} = route.params
    return (
        <Drawer.Navigator 
            drawerContent={({navigation: drawerNavigation}) => <SideMenu getUserData={getUserData} drawerNavigation={drawerNavigation} navigation={navigation}></SideMenu>}
            drawerStyle={{
                marginTop:100
            }}
            >
            <Drawer.Screen
                name="Feed"
                initialParams={{setIsAuth, getUserData}}
                options={
                    { drawerLabel: "Feed", }
                }
                component={Feed}
            >

            </Drawer.Screen>
        </Drawer.Navigator>
    );
}

export default Main;
