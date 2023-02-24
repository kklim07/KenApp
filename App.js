
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';
import { View, Text, TouchableOpacity } from 'react-native'

export default class App extends Component {

  render() {
    return(
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer> 
    )
  }
}