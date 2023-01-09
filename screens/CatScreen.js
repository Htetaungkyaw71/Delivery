import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import client, { urlFor } from '../sanity'
import SearchRestaurant from '../components/SearchRestaurant'

const CatScreen = () => {
    const [cate,setCate] = useState([])

    useEffect(()=>{
        client.fetch(`*[_type == 'resturant' && category.title == ${title}]{
            ...,
            dishes[]->
          }`).then((data)=>{
            setCate(data)
          })
    },[])


    const navigation = useNavigation()
   const {params:{title,imgUrl}} = useRoute()
    return (
        <SafeAreaView>
            <View className="bg-gray-100">
                <View>
                    <Image source={{uri:urlFor(imgUrl).url()}} className="w-full h-56 bg-gray-300 p-3" />
                    <TouchableOpacity onPress={navigation.goBack} className="absolute top-10 left-5 rounded-full bg-gray-100 p-3">
                        <ArrowLeftIcon size={20} color="#00DDBB"/>
                    </TouchableOpacity>
                </View>
                <View className="pt-5 mx-1">
                    <View className="flex-row mb-3 justify-center items-center">
                        <View>
                            <Text className="font-bold text-xl text-[#00DDBB]">{title}</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{paddingTop:10}}
                        horizontal
                        showsHorizontalScrollIndicator={false}>                     
                        {cate.length > 0 ? cate.map(item=>{
                        return (
                    
                            <SearchRestaurant 
                            key={item._id}
                            imgUrl={urlFor(item.image).url()}
                            title={item.name}
                            id = {item._id}
                            rating={item.rating}
                            address={item.address}
                            short_description={item.short_description}
                            dishes={item.dishes}
                            />
                        )    
                    }):<Text className="text-[#00DDBB] text-xl font-bold text-center mt-5">No Restaurants</Text>}
                    </ScrollView>
                </View> 
            </View>
       
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
  });
export default CatScreen