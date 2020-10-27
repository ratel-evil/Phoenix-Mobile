import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions,
  Text,
  Alert
} from 'react-native';
import {Form} from '@unform/mobile';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';

import LogoPhoenix from '../assets/logo_phoenix/Phoenix-03.png';
import BackgroundImage from '../assets/fundo01-01.png';

import Input from '../components/Input';
import  { api }  from '../global';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Header } from 'react-native/Libraries/NewAppScreen';
function Login({ route,navigation }) {
  const {setUserData} = route.params;
  const formRef = useRef(null);
  
  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        Email: Yup.string()
          .email("Insira um e-mail válido")
          .required("o e-mail é obrigatório"),
        Senha: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('A senha é obrigatória'),
      });
      console.log(data)
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(api+'/usuario/login');
      const response = await fetch(`${api}/usuario/login` ,{
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({"Content-Type": "application/json"})
      })
      if(response.ok){
        setUserData(await response.json())
      }else{
        Alert.alert(
          "Login",
          "Email ou Senha inválidos",
          [
            {
              text:"Criar Conta",
              onPress: () => navigation.navigate('SignUp')
            },
            {
              text: "Voltar"
            }
          ]

        )
      }
      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        console.log( "DEu ruim")
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image source={LogoPhoenix} style={styles.logo} />

          <Form ref={formRef} style={styles.form} onSubmit={handleSubmit}>
            <View style={styles.groupInputs}>
              <Input
                name="Email"
                title="Email"
                type="text"
              />
              <Input
                title="Senha"
                name="Senha"
                type="text"
                label="Senha"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color="#63b370"
                title={'Entrar'}
                onPress={() => formRef.current.submitForm()}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  paddingHorizontal: 28,
                  marginTop: 10,
                }}>
                <Text style={{}}>Não tem um usuário?</Text>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      textDecorationLine: 'underline',
                    }}>
                    Crie um aqui!
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </Form>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const sizes = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  logo: {
    resizeMode: 'contain',
    height: sizes.height / 3,
    width: sizes.width / 3,
  },
  form: {
    // width:sizes.width,
    // height:sizes.height / 2,

    justifyContent: 'space-evenly',
  },
  groupInputs: {
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 20,
  },

  buttons: {
    flexDirection: 'column',
    width: sizes.width,
    marginTop: 60,
    paddingLeft: 50,
    paddingRight: 50,
    // height: 20,
  },
});

export default Login;
