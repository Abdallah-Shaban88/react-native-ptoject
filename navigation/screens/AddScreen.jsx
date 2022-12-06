import * as React from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native' 
import  PickerSelect  from '../../components/PickerSelect'
import logo from '../../logo.jpg'
import axios from 'axios'
import { Platform } from 'react-native'

const offices = [
  'دائرة احوال الموصل الايمن',
  'دائرة احوال الموصل الايسر',
  'دائرة احوال حمام العليل',
  'دائرة احوال القيارة',
  'دائرة احوال بعشيقة',
  'دائرة احوال المحلبية',
  'دائرة احوال تلعفر',
  'دائرة احوال زمار',
  'دائرة احوال ربيعة',
  'دائرة احوال العياضية',
  'دائرة احوال القيروان',
  'دائرة احوال الحضر',
  'دائرة احوال التل',
  'دائرة احوال تلكيف',
  'دائرة احوال القوش',
  'دائرة احوال الحمدانية',
  'دائرة احوال نمرود',
  'دائرة احوال برطلة',
  'دائرة احوال الرمادي',
  'دائرة احوال الحبانية',
  'دائرة احوال الفلوجة',
  'دائرة احوال عامرية الصمود',
  'دائرة احوال الصقلاوية',
  'دائرة احوال الكرمة',
  'دائرة احوال هيت',
  'دائرة احوال كبيسة',
  'دائرة احوال البغدادي',
  'دائرة احوال الفرات',
  'دائرة احوال عنه',
  'دائرة احوال حديثة',
  'دائرة احوال بروانه',
  'دائرة احوال الحقلانية',
  'دائرة احوال راوه',
  'دائرة احوال القائم',
  'دائرة احوال الرطبة',
]


const onBlur = (e, setError) => { 
  const value = Platform.OS != 'web' ? e._dispatchInstances.pendingProps.value : e.target.value;
  const name = Platform.OS != 'web' ? e._dispatchInstances.pendingProps.name : e.target.name;
  value === '' ? setError(prevError => prevError ? {... prevError, [name] : true} : {[name] : true}) : setError(null)
  
  }

const AddScreen = ({navigation}) => {
  // states
  const [firstName, setFristName] = React.useState(''),
        [secondName, setSecondName] = React.useState(''),
        [thirdName, setThirdName] = React.useState(''),
        [phone, setPhone] = React.useState(''),
        [caseTypeName, setCaseTypeName] = React.useState(''),
        [shiftName, setShiftName] = React.useState(''),
        [officeName, setOfficeName] = React.useState(''),
        [familyNoName, setFamilyNoName] = React.useState(''),
        [error, setError] = React.useState(null)

  const [userDetails, setUserDetails] = React.useState(null)


  React.useEffect(() => {
    setUserDetails({
      FirstName : firstName,
      SecondName : secondName,
      ThirdName :  thirdName,
      Phone : phone,
      CaseTypeName : caseTypeName,
      ShiftName : shiftName,
      OfficeName : officeName,
      FamilyNoName : familyNoName

    })
  },[firstName, secondName, thirdName, phone, caseTypeName, shiftName, officeName, familyNoName])
  

  React.useEffect(() => console.log(Platform),[])
 
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 20}}>
        <View><Image source={logo} style={{maxWidth: 100, maxHeight: 100}}/></View>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red', marginVertical: 10}} >الحجز الالكتروني للحصول علي البطاقة الوطنية</Text>
        <View style={styles.input}>
        <TextInput
        style={{width: '100%', height: '100%', backgourndColor: 'green', textAlign: 'right', borderWidth: 1, borderRadius: 15, borderColor: '#999', paddingHorizontal: 15}}
        onChangeText= {t => setFristName(t)}
        value={firstName}
        placeholder="الاسم الاول"
        name='FirstName'
        onBlur={e => onBlur(e, setError)}
        />
        {
          error && error.FirstName && <Text style={{color: 'red', fontSize: 10}}>يجب كتابة الاسم الاول الصريح باللغة العربية بدون رموز او فراغات ...</Text>
        }
        </View>
        <View style={styles.input}>
      <TextInput
      style={{width: '100%', height: '100%', backgourndColor: 'green', textAlign: 'right', direction: 'rtl', borderWidth: 1, borderRadius: 15, borderColor: '#999', paddingHorizontal: 15}}
        onChangeText= {t => setSecondName(t)}
        value={secondName}
        placeholder="الاسم الثاني"
        name='SecondName'
        onBlur={e => onBlur(e, setError)}
        />
        {
          error && error.SecondName && <Text style={{color: 'red', fontSize: 10}}>يجب كتابة الاسم الثاني الصريح باللغة العربية بدون رموز او فراغات ...</Text>
        }
        
        </View>
        <View style={styles.input}>
      <TextInput
      style={{width: '100%', height: '100%', backgourndColor: 'green', textAlign: 'right', borderWidth: 1, borderRadius: 15, borderColor: '#999', paddingHorizontal: 15}}
        onChangeText= {t => setThirdName(t)}
        value={thirdName}
        placeholder="الاسم الثالث"
        name='ThirdName'
        onBlur={e => onBlur(e, setError)}
        />
        {
          error && error.ThirdName && <Text style={{color: 'red', fontSize: 10}}>يجب كتابة الاسم الثالث الصريح باللغة العربية بدون رموز او فراغات ...</Text>
        }
        
        </View>
        <View style={styles.input}>
      <TextInput
      style={{width: '100%', height: '100%', backgourndColor: 'green', textAlign: 'right', borderWidth: 1, borderRadius: 15, borderColor: '#999', paddingHorizontal: 15}}
        onChangeText= {t => setPhone(t)}
        value={phone}
        placeholder="الهاتف"
        keyboardType="phone-pad"
        name='Phone'
        onBlur={e => onBlur(e, setError)}
        />
        {
          error && error.Phone && <Text style={{color: 'red', fontSize: 9,}} numberOfLines={1}>يجب كتابة رقم الهاتف ارقام فقط 11 رقم وارقام الهواتف العراقية فقط بدون رموز او فراغات</Text>
        }
        
        </View>
      <PickerSelect setSelectedItem={setCaseTypeName} name='CaseTypeName' error={error} setError={setError} items={['نوع المعاملة', 'تسجيل لأول مرة']}/>
      <PickerSelect setSelectedItem={setOfficeName} name='OfficeName' error={error} setError={setError} items={['اسم دائرة الاحوال' , ... offices]} />
      <PickerSelect setSelectedItem={setShiftName} name='ShiftName' error={error} setError={setError} items={['الوجبة', 'صباحي']} />
      <PickerSelect setSelectedItem={setFamilyNoName} name='FamilyNoName' error={error} setError={setError} items={['عدد افراد الاسرة', '1', '2', '3', '4', '5', '6', '7', '8', '9']}/>
      <View style={{ ... styles.input, padding: 0, borderWidth: 0, alignItems: 'stretch', marginTop: 15}}>
        <TouchableOpacity style={{ backgroundColor: '#044a05', alignItems: 'center', flex: 1, justifyContent: 'center', borderRadius: 15}} onPress={() => {
         // check error
         if(!error){
          // send data
            // axios.post("https://reg.nid-moi.gov.iq/_blazor/negotiate?negotiateVersion=1", userDetails).then((response) => {console.log(response);}).catch(err => console.log(err))
            navigation.navigate('codeConfirm')
            console.log(userDetails)
          }
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold'}}>اضافة</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      display: 'flex',
      justifyContent: 'center',
      width: '80%',
      height: 50,
      marginVertical: 10,
      // borderWidth: 1,
      borderColor: '#999',
borderRadius: 15,
alignItems: 'flex-start'
    },
  });
  

export default AddScreen