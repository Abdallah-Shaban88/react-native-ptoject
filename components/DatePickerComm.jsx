import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react'
import { View, Button, TextInput } from 'react-native';

const DatePickerComm = () => {
    const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    console.log(date)
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShow(true)
  };

  return (
    <View>
         {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
         <TextInput editable={show ? false : true} style={{ border: '1px solid #eee'}} placeholder='اختار التاريخ' onPressIn={() => showDatepicker()} value={`${date.toLocaleDateString('en-CA')}`} onChange={onChange}/>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default DatePickerComm