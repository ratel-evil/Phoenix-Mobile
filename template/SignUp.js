import React, {useRef} from 'react';
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {Form} from '@unform/mobile';
import Input from '../components/Input';

import LogoPhoenix from '../assets/logo_phoenix/Phoenix-03.png';

const SignUp = ({navigation}) => {
  const formRef = useRef(null);
  function handleSubmit(data) {
    console.warn('Cadastrar');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <Image source={LogoPhoenix} style={styles.logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          style={styles.input}
          name="nome"
          type="text"
          placeholder="Nome"
        />
        <Input
          style={styles.input}
          name="sobrenome"
          type="text"
          placeholder="Sobrenome"
        />
        <Input
          style={styles.input}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Confirmar Senha"
        />
        <Button
          color="#63b370"
          title="Cadastrar"
          onPress={() => formRef.current.submitForm()}
        />
      </Form>
    </KeyboardAvoidingView>
  );
};

const sizes = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    height: sizes.height - 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  logo: {
    resizeMode: 'contain',
    height: sizes.width / 2,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 300,
    height: 45,
    paddingTop: 10,
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
});

export default SignUp;
