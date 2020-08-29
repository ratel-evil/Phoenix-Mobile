import React, {useEffect, useRef} from 'react';

import {TextInput, Text, StyleSheet} from 'react-native';
import {useField} from '@unform/core';

function Input({name, ...rest}) {
  const inputRef = useRef(null);

  const {fieldName, registerField, defaultValue, error} = useField(name);

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
        ref.setNativeProps({text: value});
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        placeholderTextColor="#666360"
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    width: 300,
    color: 'red',
    marginBottom: 10,
    textAlign: 'left',
  },
});

export default Input;
