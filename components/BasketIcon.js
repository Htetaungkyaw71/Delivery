import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


const BasketIcon = () => {
    const { items } = useSelector((state)=>state.basket)
    const total = items.reduce((total,item) =>{
        return total += item.price
    },0)
    const navigation = useNavigation()
    if(items.length <= 0) return;
    
  return (
    <View className="absolute bottom-8 w-full z-50">
        <TouchableOpacity onPress={()=>navigation.navigate('Basket')} className="rounded-lg mx-5 p-3 items-center bg-[#00DDBB]  flex-row justify-between">
            <View className="rounded-lg p-2 bg-gray-100">
                <Text className="text-[#00DDBB] font-bold">{items.length}</Text>
            </View>
            <Text className="text-white font-bold text-lg">Carts</Text>
            <Text className="text-white font-bold text-lg">${total}</Text> 
        </TouchableOpacity>
     
    </View>
  )
}

export default BasketIcon