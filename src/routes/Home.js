import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Profile from './Profile'
import Search from './Search'

export default class Home extends Component {
    render() {
        return(
            <View>
                <Text>
                    This is Home Page
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(Home)}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(Search)}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(Profile)}>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        )
    }
}