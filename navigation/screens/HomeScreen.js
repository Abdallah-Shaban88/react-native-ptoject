import * as React from 'react'
import { View, Text } from 'react-native' 
import ReservationList from '../../components/ReservationList'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', display: 'flex', padding: 20}}>
        <ReservationList />
    </View>
  )
}

export default HomeScreen