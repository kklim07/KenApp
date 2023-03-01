import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Pagination({ route }) {
    return(
        <View>
            {category.categories.map((category,index) => (
                <TouchableOpacity onPress={() => navigation.push('DetailPage',{category})} key={index} style={{ borderWidth: 1, marginHorizontal: 10, marginVertical: 4, height: 30, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                        <Text style={{ width: 25, fontWeight: 'bold' }}>{index+1}. </Text>
                        <Text>{category}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}