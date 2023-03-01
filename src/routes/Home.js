import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default function Home({ navigation }){

    const [category, setCategory] = useState([])
    const [page, setPage] = useState([])
    const [totalPage, setTotalPage] = useState([])

    useEffect(() => {
        getListData()
        setPage(1)
    }, [])

    useEffect(() => {
        console.log(page,'isipage')
    }, [page])

    const getListData = async () => {
        try {
            const { data }  = await axios.get('https://api.publicapis.org/categories')
            setCategory(data)
            let totalPageUsed = Math.round(data.categories.length / 10) + 1
            setTotalPage(Array.apply(null, {length: totalPageUsed}).map(Number.call, Number))
        } catch(error) {
            console.log(error)
        }
    }

    const paginationNumber = () => {
        return (
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }}>
                    <TouchableOpacity style={{ borderWidth: 1, width: 40 }} onPress={() => (page>1) ? setPage(page-1) : null}>
                        <Text style={{ textAlign: 'center' }}>Prev</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        {totalPage.map((index) => (
                            <View key={index}>
                                <TouchableOpacity style={{ borderWidth: 1, width: 40, marginHorizontal: 2 }} onPress={() => setPage(index + 1)}>
                                    <Text style={{ textAlign: 'center' }}>
                                        {index + 1}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, width: 40 }} onPress={() => (page<totalPage.length) ? setPage(page+1) : null}>
                        <Text style={{ textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    const showCategoryList = (page) => {
        let data = category?.categories?.slice(page * 10 - 10,page * 10)
        if(category !== undefined){
            return (
                <View style={{ marginVertical: 100 }}>
                    {data?.map((category,index) => (
                        <TouchableOpacity onPress={() => navigation.push('DetailPage',{category})} key={index} style={{ borderWidth: 1, marginHorizontal: 10, marginVertical: 4, height: 30, justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 8 }}>
                                <Text style={{ width: 25, fontWeight: 'bold' }}>{page * 10 - 10 + index + 1}. </Text>
                                <Text>{category}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            )
        } else {
            return (
                <View>
                    <Text>No Data Available</Text>
                </View>
            )
        }
        
    }


    return(
        <View>
            <View style={{ width: Dimensions.get('window').width, height: '96.8%', justifyContent: 'space-between' }}>
                {/* <ScrollView showsVerticalScrollIndicator={false} style={{ height: 500 }}> */}
                    {showCategoryList(page)}
                    <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
                        {paginationNumber()}
                        <Button
                            onPress={() => navigation.push('Voucher')}
                            title="Voucher"
                            color="#841584"
                        />
                    </View>
                {/* </ScrollView> */}
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