import React from 'react';
import { View, Image, Button, TextInput, StyleSheet } from 'react-native';
import LogoPhoenix from '../assets/logo_phoenix/Phoenix-03.png'
import BackgroundImage from '../assets/fundo01-01.png'

function Login({ navigation }) { 
        return ( 
            <View style={styles.container}>
                <Image source={LogoPhoenix} style={{width:160,height:200}}/>
                <TextInput style={styles.input} placeholder={'Usuário'}></TextInput>    
                <TextInput style={styles.input} placeholder={'Senha'}></TextInput>    
                <View style={styles.buttons}>
                    <Button color="#63b370" title={'Entrar'} onPress={() => console.warn('clicou em entrar')}/>
                    <Button color="#63b370" title={'Cadastrar'} onPress={() => console.warn('clicou em sua mãe')}/>
                </View>
                <Image source={BackgroundImage} style={styles.backImage}/>
            </View>
         );
    }

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 200,
        height: 40,
        paddingTop:10,
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
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor: '#63b370',
    },
    container: {
        
        alignItems:'center', 
        justifyContent:'space-around',
        width:"100%", 
        height: "100%", 
        backgroundColor: "#efefef"
    },
    buttons: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'52%',
        height:20,
        
    },
    backImage: {
        position:'absolute',
        width:"200%",
        height:300,
        opacity:0.2,
        bottom:0   
    }
})



export default Login;