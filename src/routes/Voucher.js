import React, {Component} from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Voucher({ navigation }) {
    return(
        <View>
            <View style={{ width: Dimensions.get('window').width, height: '100%', backgroundColor: '#00000' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ height:1000 }}>
                        tester
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}