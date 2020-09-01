import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
  Text,
} from 'react-native';
import {Form} from '@unform/mobile';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';

import LogoPhoenix from '../assets/logo_phoenix/Phoenix-03.png';
import BackgroundImage from '../assets/fundo01-01.png';

import Input from '../components/Input';

function Login({navigation}) {
  const formRef = useRef(null);

  async function handleSubmit(data, {reset}) {
    try {
      const schema = Yup.object().shape({
        usuario: Yup.string()
          .min(3, 'No mínimo de 3 caracteres')
          .required('O usuário é obrigatório'),
        senha: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('O a senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      // set token
      console.warn(data);
      formRef.current.setErrors({});

      navigation.navigate('Main');

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView scrollEnabled={true}>
        <View style={styles.container}>
          <Image source={LogoPhoenix} style={styles.logo} />

          <Form ref={formRef} style={styles.form} onSubmit={handleSubmit}>
            <View>
              <Input
                style={styles.input}
                name="usuario"
                type="text"
                placeholder="Usuário"
              />
              <Input
                style={styles.input}
                name="senha"
                type="text"
                placeholder="Senha"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color="#63b370"
                title={'Cadastrar'}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
              />
              <Button
                color="#63b370"
                title={'Entrar'}
                onPress={() => formRef.current.submitForm()}
              />
            </View>
          </Form>
          <Image source={BackgroundImage} style={styles.backImage} />
          {/* <Image source={LogoPhoenix} style={styles.logo} /> */}
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}
const sizes = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    height: sizes.height - 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  logo: {
    resizeMode: 'contain',
    height: sizes.width / 2,
    marginTop: 20,
  },
  form: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 300,
    height: 45,
    paddingTop: 10,
    marginTop: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: '#fff',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 20,
  },
  backImage: {
    position: 'absolute',
    width: '200%',
    height: 350,
    opacity: 0.2,
    bottom: 0,
    zIndex: -1,
  },
});

export default Login;
