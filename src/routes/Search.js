import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Home from './Home'

export default class Search extends Component {
    render() {
        return(
            <View>
                <Text>
                    This is Search Page
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(Home)}>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        )
    }
}