import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../routes/Home'
import Profile from '../routes/Profile'
import Search from '../routes/Search'

const Stack = createStackNavigator()

export default class StackNav extends Component {
    render() {
        return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Search' component={Search}/>
                <Stack.Screen name='Profile' component={Profile}/>
            </Stack.Navigator>
        )
    }
}