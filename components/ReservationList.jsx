import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Button } from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'abdallah' ,
      phone: '01111111111111',
      place: 'دائرة احوال'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'abdallah' ,
      phone: '01111111111111',
      place: 'دائرة احوال'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'abdallah' ,
      phone: '01111111111111',
      place: 'دائرة احوال'
    },
  ];
  
  const Item = ({ name, phone, place }) => (
    <View style={[styles.item, styles.shadowProp]}>
        <View>
        <Text style={styles.title}>{name}</Text>
        <Text >{phone}</Text>
        <Text style={{color: 'red'}} >{place}</Text>
        </View>
        <View style={{display: 'flex', borderRadius: 5, alignSelf: 'center', justifyContent: 'center'}}>
            <Button title='حذف' color={'#999'}/>
        </View>
    </View>
  );

  const ReservationList = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name} phone={item.phone} place={item.place}/>
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
        justifyContent: 'space-around',
        flexDirection: 'row',
    display: 'flex',
      borderRadius: 13,
      shadowColor: 'black',
      paddingVertical: 20,
      marginVertical: 8,
      // marginHorizontal: 15,
    },
    title: {
      fontSize: 32,
    },
    shadowProp:{
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 12,  
        elevation: 2
    }
  });
  
  export default ReservationList