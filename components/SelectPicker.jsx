import React, {useState} from 'react'
import Picker from '@ouroboros/react-native-picker';

function SelectPicker() {
    let [picker, setPicker] = useState('CA');
  return (
    <Picker
    onChanged={setPicker}
    options={[
        {value: 'CA', text: 'Canada'},
        {value: 'MX', text: 'Mexico'},
        {value: 'US', text: 'United States'}
    ]}
    style={{borderWidth: 1, borderColor: '#a7a7a7', borderRadius: 5, marginBottom: 5, padding: 5}}
    value={picker}
/> 
  )
}

export default SelectPicker