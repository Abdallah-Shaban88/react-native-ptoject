import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//screens
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import AddScreen from './screens/AddScreen'
import CodeConfirm from './screens/CodeConfirm'

//screens names
const homeName = 'الحجوزات'
const menuName = 'Menu'
const addName = 'Add'

const Tab = createBottomTabNavigator()

const MainContainer = ({navigation}) => {
  
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: 'transparent', height: 100, borderBottomWidth: 2},
          headerShown: route.name !== addName && true,
            headerTitleAlign: 'center',
            headerTitle: route.name === homeName ? 'الحجوزات' : route.name === menuName ? "التفاصيل" : "",
            headerTitleStyle: {color: 'red', fontSize: 25, fontWeight: 'bold', height: 50, },
            tabBarLabelStyle: {'display': 'none'},
            tabBarIcon: ({focused, color, size}) => { 
             let iconName
            let rn = route.name
            color= focused ? 'red' : 'black';
            if(rn === homeName) iconName = 'home' 
            if(rn === menuName) iconName = 'menu' 
            if(rn === addName) iconName = 'add-circle' 

            return <Ionicons name={iconName} size={size} color={color} />
            } 

        })}
        >
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={menuName} component={MenuScreen}/>
            <Tab.Screen name={addName} component={AddScreen}/>

        </Tab.Navigator>
            <Tab.Screen name={'codeConfirm'} component={CodeConfirm} options={{}}/>
    </NavigationContainer> 
  )
}

export default MainContainer