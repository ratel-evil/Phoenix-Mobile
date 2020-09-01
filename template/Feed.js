import React, { useEffect, useState } from 'react';
import { Text, View, Button, Image, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header'
import { FlatList } from 'react-native-gesture-handler';
import Post from '../components/Post'
import { SafeAreaView } from 'react-native-safe-area-context';

const Feed = ({ navigation }) => {
    const [data, setData] = useState({ data: [] });

    useEffect(() => {
        fetch('https://api-phoenix.azurewebsites.net/api/feed')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);


    const renderItem = ({ item, index }) => {
        return (
            <Post
                autor={item.autor}
                urlAvatar={item.urlFotoAutor}
                insituicao={item.instituicao}
                descricao={item.descricao}
                dataPublicacao={item.dataPublicacao}
                quantidadeLikes={item.quantidadeLikes}
            />
        )
    }


    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={'Feed'}></Header>
            <View style={styles.points}>
                <Text style={styles.textPoints}>10.000 - pts </Text>
                <Button title='Resgatar' color="#63b370" style={styles.resgatarBtn} onPress={console.warn('em desenvolvimento')}></Button>
            </View>
            <View style={{flex:1, marginTop: 10}}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    key={(item) => item.autor}
                ></FlatList>
            </View>


        </View>
    );
}
const sizes = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: sizes.height - 20
    },
    points: {
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 30,
        marginTop: -20
    },
    textPoints: {
        color: '#63b370',
        fontWeight: 'bold',
        width: 85,
        textAlign: "left"
    },
    resgatarBtn: {
        paddingHorizontal: 8,
        paddingVertical: 6,
    }
})

export default Feed;