
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/routes/Home'
import Search from './src/routes/Search'
import Profile from './src/routes/Profile'
import Voucher from './src/routes/Voucher'
import DetailPage from './src/routes/DetailPage'

const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name='Voucher' component={Voucher} options={{ headerShown: false }}/>
        <Stack.Screen name='DetailPage' component={DetailPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// maincolor #FFFF60
// subcolor #006E60
// textcolor #374000
// thirdcolor #F2FEDC
