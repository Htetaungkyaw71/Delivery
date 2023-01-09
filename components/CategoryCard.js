import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({imgUrl,title}) => {
  let navigation = useNavigation()

  return (
    <TouchableOpacity className="relative mr-2" onPress={()=>navigation.navigate('Cat',{title,imgUrl})}>
        <Image source={{uri:imgUrl}} className="w-20 h-20 rounded"/>
        <Text className="absolute font-bold bottom-1 left-1 text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard