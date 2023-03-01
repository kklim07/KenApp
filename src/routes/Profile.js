import React, {Component} from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Profile({ navigation }) {
    return(
        <View>
            <View style={{ width: Dimensions.get('window').width, height: '95%', backgroundColor: '#00000' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ height:1000 }}>
                        test profile
                    </Text>
                </ScrollView>
            </View>
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#006E60', width: Dimensions.get('window').width, height: '2%', alignContent: 'center', position: 'absolute', height: 50 }}>
                    <View style={{ width: Dimensions.get('window').width/3, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home', {param: 'test'})}>
                            <Text style={{ textAlign: 'center' }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: Dimensions.get('window').width/3, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search', {param: 'test'})}>
                            <Text style={{ textAlign: 'center' }}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: Dimensions.get('window').width/3, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile', {param: 'test'})}>
                            <Text style={{ textAlign: 'center' }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}