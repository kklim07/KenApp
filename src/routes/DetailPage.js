import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function PageDetail({ navigation, route }) {
    return(
        <View>
            <Text>
                {route.params.category}
                {console.log(route,'isiroute')}
            </Text>
        </View>
    )
}