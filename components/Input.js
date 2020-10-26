import React, { useEffect, useRef, useState } from 'react';

import { TextInput, Text, StyleSheet, Animated, View } from 'react-native';
import { useField } from '@unform/core';

function Input({ 
  name, 
  value,
  title,
  keyboardType = 'default',
  titleActiveSize = 12.5,
  titleInActiveSize = 15,
  titleActiveColor = 'black',
  titleInactiveColor = 'dimgrey',
  textInputStyles = {},
  otherTextInputAttributes = {}, 
  ...rest },) {

  const inputRef = useRef('');
  const position = new Animated.Value(inputRef.current.value ? 1 : 0);
  
  const [isFieldActive, setFieldActive] = useState(false)
    
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const _handleFocus = () => {
    if (!isFieldActive) {
      setFieldActive(true);
      Animated.timing(position, {
        useNativeDriver: false,
        toValue: 1,
        duration: 150,
      }).start();
      
    }
  }

  const _returnAnimatedTitleStyles = () => {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: 15 ,
      color: titleActiveColor 
    }
  }
  const _handleBlur = () => {
    if (isFieldActive && !value) {
      setFieldActive(false);
      Animated.timing(position, {
        useNativeDriver:false,
        toValue: 0,
        duration: 150,
      }).start();
    }
  }
const _onChange = (val) => {
  if(isFieldActive && val)
  {
    Animated.timing(position, {
      useNativeDriver:false,
      toValue: 1,
      duration: 150,
    }).start();
  }
}
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    
  <View style = {[styles.container, error ? styles.containerError: '']}>
    <Animated.Text
      style = {[styles.titleStyles, _returnAnimatedTitleStyles()]}
    >
      {title}
    </Animated.Text>
      <TextInput
        ref={inputRef}
        
        style = {[styles.textInput, textInputStyles]}
        underlineColorAndroid = 'transparent'
        defaultValue={defaultValue}
        onFocus = {_handleFocus}
        onBlur = {_handleBlur}
        className={error ? 'has-error' : ''}
        placeholderTextColor="#666360"
        keyboardType = {keyboardType}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
            _onChange(value)
          }
        }}
        {...rest}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  containerError:{
    borderColor: 'red',
    height:50,
    marginBottom:20,
  },
  error: {
    width: 300,
    color: 'red',
    left:5,
    bottom:0,
    textAlign: 'left',
  },container: {
    width: '100%',
    height: 50,
    marginVertical: 4,
    },
  textInput: {
    fontSize: 15,
    marginTop: 4,
    paddingBottom:0,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Avenir-Medium',
    color: 'black',
    },
   titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    fontSize: 15,
    left: 3,
    left: 4,
    }
});

export default Input;


