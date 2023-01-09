import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native'
import React , { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ArrowRightIcon, MapIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const {
        params:{
            imgUrl,
            title,
            rating,
            address,
            short_description,
            dishes,
        }
    } = useRoute()



    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false
        })
      },[])
    

  return (
    <>
    <BasketIcon/>
        <ScrollView>
            <View className="relative">
                <Image source={{uri:urlFor(imgUrl).url()}} className="w-full h-56 bg-gray-300 p-3" />
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-10 left-5 rounded-full bg-gray-100 p-3">
                    <ArrowLeftIcon size={20} color="#00DDBB"/>
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4 pb-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row items-center space-x-2 pt-2 ">
                        <StarIcon color="#00DDBB" size={20}/>
                        <Text className="text-md text-[#00DDBB]">{rating}</Text> 
                        <Text className='text-gray-600'>Offers</Text>       
                        <MapIcon color="gray" size={20}/>
                        <Text className="text-gray-600">Near by {address}</Text>
                    </View>
                    <View className="pt-4 pb-4 border-b-2 border-gray-200">
                        <Text className="text-gray-600">{short_description}</Text>
                    </View>
                    <View className="flex-row items-center justify-between pt-4">
                        <Text className="font-bold ">Have a food allergy?</Text>
                        <ArrowRightIcon size={20} color="#00CCDD"/>
                    </View>
                </View>
            </View>
            <View className="bg-gray-200 px-4 pt-4 pb-4">
                <Text className="font-bold text-xl">Menu</Text>
            </View>
            <View className="bg-white pt-4 pb-28">
                    {dishes && dishes.map(dish=>{
                        return (
                            <DishRow key={dish._id} 
                                id = {dish._id}
                                name={dish.name} 
                                short_description={dish.short_description} 
                                image={dish.image} 
                                price={dish.price} 
                            />   
                        )  
                    }) }
                  
            </View>
               
        </ScrollView>
    </>

   
  )
}

export default RestaurantScreen