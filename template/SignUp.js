import React, {useRef} from 'react';
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Form} from '@unform/mobile';

import Input from '../components/Input';
import Date from '../components/Date';
import RadioButton from '../components/radioButton';

import LogoPhoenix from '../assets/logo_phoenix/Phoenix-03.png';

const SignUp = ({navigation}) => {
  const formRef = useRef(null);
  function handleSubmit(data) {
    console.warn('Cadastrar');
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <Image source={LogoPhoenix} style={styles.logo} />
        <Form style={styles.forms} ref={formRef} onSubmit={handleSubmit}>
          <View style={styles.inputContainer}>
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
          </View>

          <View style={styles.selectDateContainer}>
            <Text>Data de nasc: </Text>
            <Date />
          </View>

          <Text>Você tem vontade de ser um doador de órgãos?</Text>
          <View style={styles.radioButtons}>
            <RadioButton />
          </View>
          <View style={styles.btnCadastrar}>
            <Button
              style={styles.buttons}
              color="#63b370"
              title="Cadastrar"
              onPress={() => formRef.current.submitForm()}
            />
          </View>
        </Form>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const sizes = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    height: sizes.height - 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  logo: {
    marginTop: 100,
    marginBottom: 60,
    width: 80,
    height: 100,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  forms: {
    marginTop: 60,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
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
  selectDateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  radioButtons: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCadastrar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: '50%',
  },
});

export default SignUp;
