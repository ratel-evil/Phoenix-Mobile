import React, {useState, useRef} from 'react';
import * as Yup from 'yup';
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
import {url} from '../global';
const SignUp = ({navigation}) => {
  const formRef = useRef(null);
  const [radioButtonSelected, setRadioButtonSelected] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  async function handleSubmit(data, {reset}) {
    try {
      const schema = Yup.object().shape({
        Nome: Yup.string()
          .min(3, 'mínimo de 3 caracteres')
          .required('O nome é obrigatório'),
        Sobrenome: Yup.string().required('O sobrenome é obrigatório'),
        Email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        Senha: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('Senha é obrigatória'),
        ConfirmeSenha: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('Sua confirmação de senha deve ser igual a senha'),
      });
      console.log(selectedDate)
      await schema.validate(data, {
        abortEarly: false,
      });
      delete data.confirmPassword;
      
      // const response = await fetch(`${url}/usuario`, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     Nome: data.Nome,
      //     Sobrenome: data.Sobrenome,
      //     Email: data.email,
      //     Senha: data.Senha,
      //     DesejoDoacaoOrgao :  radioButtonSelected == 1 ? true : false,
      //     Data: selectedDate
      //   }),
      //   headers: new Headers({
      //     "Content-Type": 'application/json; charset=utf-8',
      //   }),
      // })

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
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {/* <Image source={LogoPhoenix} style={styles.logo} /> */}
        <Form style={styles.forms} ref={formRef} onSubmit={handleSubmit}>
          <Input name="Nome" type="text" title="Nome" />
          <Input name="sobrenome" type="text" title="Sobrenome" />
          <Input name="Email" type="email" title="Email" />
          <Input
            name="Senha"
            type="password"
            title="Senha"
            secureTextEntry={true}
          />
          <Input
            name="ConfirmSenha"
            type="password"
            title="Confirmar Senha"
            secureTextEntry={true}
          />

          <View style={styles.selectDateContainer}>
            <Text>Data de nasc: </Text>
            <Date
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          </View>

          <Text>Você tem vontade de ser um doador de órgãos?</Text>

          <View style={styles.radioButtons}>
            <RadioButton setRadioButtonSelected={setRadioButtonSelected} />
          </View>

          <View style={styles.btnCadastrar}>
            <Button
              style={styles.buttons}
              color="#63b370"
              title="Cadastrar"
              onPress={handleSubmit}
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
    flex: 1,
    height: sizes.height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  logo: {
    width: 80,
    height: 100,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  forms: {
    flex: 1,
    width: sizes.width,
    paddingHorizontal: 24,
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
    width: sizes.width,
    paddingRight: 48,
    justifyContent: 'flex-start',
    height: 20,
  },
});

export default SignUp;
