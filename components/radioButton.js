import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';

const SelectedRadioButton = ({name, selectedButtonColor, buttonColor,radioButtonSelected, setRadioButtonSelected}) => {
  const radio_props = [
    {label: 'sim       ', value: 0},
    {label: 'não', value: 1},
  ];

  
  return (
    <RadioForm
      name={ name || "selectRadio" }
      selectedButtonColor={selectedButtonColor || '#63b370'}
      buttonColor={buttonColor || '#63b370'}
      radio_props={radio_props}
      initial={0}
      formHorizontal={true}
      onPress={(value) => {
        setRadioButtonSelected;
      }}
    />
  );
};

export default SelectedRadioButton;
