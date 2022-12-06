import React, {useState, useRef, useEffect} from 'react'
import { Picker } from '@react-native-picker/picker'
import { View, Text } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

const PickerSelect = ({items, name, setSelectedItem, setError, error}) => {
    const [selected, setSelected] = useState(items[0]);
    const pickerRef = useRef();
    
    function open() {
      pickerRef.current.focus();
    }

    useEffect(() => {setSelectedItem(selected)}, [selected])

return <View style={{width: '80%'}}><View style={{width: '100%',
height: 50,
marginVertical: 10,
borderWidth: 1,
borderColor: '#999',
padding: 10,
display:'flex',
justifyContent: 'center',
borderRadius: 15,
}}><Picker
  style={{ height: 60, width: 337  }}
  name={name}
  ref={pickerRef}
  selectedValue={selected}
  mode={'dialog'}
  onValueChange={(itemValue, itemIndex) =>
    setSelected(itemValue)
  }
  onBlur={(e) => { 
    selected === items[0]  ? setError(prevError => prevError ? {... prevError, [name] : true} : {[name] : true}) : setError(null)
    
    }}>
    {
      items.map((item, index )=> <Picker.Item key={index} label={item} value={item} enabled={index != 0 ? true : false } color={index == 0 && '#999'}/>)
    }
</Picker>
</View>
{
          error && error[name] && <Text style={{color: 'red', fontSize: 9}}>يرجي مليء هذا الحقل</Text>
        }
</View>
};

export default PickerSelect