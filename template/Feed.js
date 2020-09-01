import React, { useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import Header from '../components/Header'

const Feed = ({ navigation }) => {



    return ( 
        <View>
            <Header navigation={navigation} title={'Feed'}></Header>
        </View>
     );
}
 



export default Feed;