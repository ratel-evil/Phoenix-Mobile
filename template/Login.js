import React, { useState } from 'react';
import {
    View,
    Image,
    Button,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    Dimensions,
    Text
} from 'react-native';
import LogoPhoenix from '../assets/logo_phoenix/Phoenix-03.png'
import BackgroundImage from '../assets/fundo01-01.png'



function Login({ navigation }) {
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleUser = (e) => {
        console.warn(e)
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : null} 
            style={styles.container} 
            resetScrollTocoords={{x:0,y:0}}
            
            >
            <Image source={LogoPhoenix} style={styles.logo } />
            <TextInput style={styles.input} placeholder={'Usuário'} onChangeText={setUsername}></TextInput>
            
            <TextInput style={styles.input} placeholder={'Senha'} onChangeText={setPassword}></TextInput>
            
            <View style={styles.buttons}>
                <Button color="#63b370" title={'Cadastrar'} onPress={() => console.warn('clicou em cadstrar')} />
                <Button color="#63b370" title={'Entrar'} onPress={() => console.warn('clicou em entrar')} />
            </View>
            <Image source={BackgroundImage} style={styles.backImage} />
            {/* <SafeAreaView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>



                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView> */}
        </KeyboardAvoidingView>
    );
}
const sizes = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: sizes.width,
        height: sizes.height -50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#efefef"
    },
    logo: {
        resizeMode: 'contain',
        height: sizes.width /2 ,
    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 300,
        height: 45,
        paddingTop: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor: '#fff'
    },
   
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '52%',
        height: 20,

    },
    backImage: {
        position: 'absolute',
        width: "200%",
        height: 300,
        opacity: 0.2,
        bottom: 0,
        zIndex: -1
    }
})



export default Login;