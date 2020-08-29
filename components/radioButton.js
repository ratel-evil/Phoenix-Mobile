import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';

const SelectedRadioButton = () => {
  const radio_props = [
    {label: 'sim     ', value: 0},
    {label: 'não', value: 1},
  ];

  const [radioButtonSelected, setRadioButtonSelected] = useState(0);
  return (
    <RadioForm
      name="selectRadio"
      selectedButtonColor={'#63b370'}
      buttonColor={'#63b370'}
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
