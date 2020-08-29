import React, {useState} from 'react';
import DatePicker from 'react-native-datepicker';

import {StyleSheet} from 'react-native';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <DatePicker
      name="dataNascimento"
      format="DD/MM/YYYY"
      style={styles.selectedDate}
      date={selectedDate}
      onDateChange={setSelectedDate}
    />
  );
};

const styles = StyleSheet.create({
  selectedDate: {
    flex: 1,
    height: 50,
  },
});

export default Date;
