import * as React  from 'react';
import {useState} from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Button, TextInput } from 'react-native';
import DatePickerApp from './DatePicker';
import DatePickerComm from './DatePickerComm';
import DatePickerModel from './DatePickerModel';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'abdallah' ,
      phone: '01111111111111',
      meal: 'صباحي',
      transType: 'تسجيل لاول مرة',
      date: ''
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'abdallah' ,
      phone: '01111111111111',
      meal: 'صباحي',
      transType: 'تسجيل لاول مرة',
      date: ''
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'abdallah' ,
      phone: '01111111111111',
      meal: 'صباحي',
      membersCount: '1',
      transType: 'تسجيل لاول مرة',
      date: ''
    },
  ];
  
  const Item = ({ name, phone, meal, membersCount, transType, date }) => {
    const [open, setOpen] = useState(false)
    return (
    <View style={[styles.item, styles.shadowProp]}>
        <View style={{marginVertical: 8}}>
        <Text style={styles.text} >{name} : الاسم بالكامل</Text>
        <Text style={styles.text} >رقم الهاتف : {phone}</Text>
        <Text style={styles.text} >الوجبة : {meal}</Text>
        <Text style={styles.text} >عدد افراد الاسرة : {membersCount} </Text>
        <Text style={styles.text} >نوع المعاملة : {transType} </Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}> 
        <Text style={styles.text}>تاريخ الحجز : </Text>
        <DatePickerComm />
        </View>
        </View>
        
        
        {/* <DatePickerModel open={open} setOpen={setOpen}/> */}
        <View style={{flex: 1, alignItems: 'stretch', alignSelf: 'flex-start', borderRadius: 15}}><Button title='اكمال الحجز' color={'#044a05'}/></View>
        
    </View>
  )}

  const DetailsList = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} phone={item.phone} meal={item.meal} membersCount={item.membersCount} transType={item.transType} date={item.date}/>
      );

    return (
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      width: '90%',
      alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    display: 'flex',
      borderRadius: 13,
      shadowColor: 'black',
      padding: 20,
      marginVertical: 8,
      // marginHorizontal: 15,
    },
    title: {
      fontSize: 32,
    },
    text:{textAlign: 'left', marginBottom: 5},
    shadowProp:{
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 12,  
        elevation: 2
    }
  });
  
  export default DetailsList