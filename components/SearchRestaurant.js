import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MapIcon, StarIcon } from 'react-native-heroicons/outline'

const SearchRestaurant = ({
    id,
    imgUrl,
    title,
    rating,
    address,
    short_description,
    dishes,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Restaurant',{
        id,
        imgUrl,
        title,
        rating,
        address,
        short_description,
        dishes,
      })
    }

    }
    className="mr-3 bg-white shadow">
        <Image source={{uri:imgUrl}} className="w-64 h-36 rounded-sm"/>
        <View className="px-3 pb-4">
            <Text className="pt-2 font-boldtext-lg">{title}</Text>
          <View className="flex-row items-center space-x-2 pt-2">
            <StarIcon size={20} color="#00DDBB"/>
            <Text className="text-xs text-gray-500">
              <Text className="text-green-300">
              {rating}
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-2 pt-2">
            <MapIcon size={20} color="#00DDBB"/>
            <Text className="text-xs text-gray-500">
              Near by . {address}
            </Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default SearchRestaurant