import React, { useState } from 'react'
import { Button, TextInput, View, Text } from 'react-native'

const CodeConfirm = ({navigation}) => {
    const fakeCode = '1111'
    const [code, setCode] = useState('')
    const [error, setError] = useState(false)
  return (
    <View>
        <Text>ادخل الكود</Text>
        <TextInput 
        focusable={true}
        value={code}
        onChange = {setCode}
        placeholder = 'الرجاء ادخال الرمز المرسل عبر 2322'
        />
        {
            error && <Text style={{color: 'red'}}>برجاء ادخال الرمز الصحيح</Text>
        }
        <View>
        <Button color={'#044a05'} title='تحقق' onPress={( ) => {
            code == fakeCode ? navigation.navigate('Menu') : setError(true)
        }}/>
        </View>
    </View>
  )
}

export default CodeConfirm