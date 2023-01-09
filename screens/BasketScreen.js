import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../redux/basketSlice'
import { urlFor } from '../sanity'

const BasketScreen = () => {
    const navigation = useNavigation()
    const {items} = useSelector(state=>state.basket)
    let [groupItems,setgroupItems] = useState([])

    useMemo(()=>{
        const gt = items.reduce((results,item)=>{
            (results[item.id] = results[item.id] || []).push(item);
            return results
        },{})
        setgroupItems(gt)
    },[items])
    const dispatch = useDispatch()
    

    const removeItem = (id)=>{
        if(!items.length > 0) return
        dispatch(decrement({id}))
    }
    const total = items.reduce((total,item)=>{
        return total += item.price
    },0)

    const delivery = total !== 0 ? 3 : 0; 
   

    

 
  return (
    <SafeAreaView style={styles.safeArea}>
        <View className="mt-3 bg-gray-300 flex-1">
            <View className="bg-white items-center flex-row justify-between px-4 p-2">
                <Text className="font-bold text-xl">Carts</Text>
                <TouchableOpacity onPress={navigation.goBack}>
                    <XCircleIcon size={50} color="white" fill="#00DDBB"/>
                </TouchableOpacity>
            </View>
            <ScrollView className="mt-4">
                {groupItems && Object.entries(groupItems).map(([key,item])=>{
                    return (
                        <View key={key} className="flex-row flex-1 p-5 space-x-2 bg-white items-center">
                            <View className="flex-row flex-1 space-x-2 items-center">
                                <Text className="font-bold text-lg text-[#00DDBB]">
                                    {item.length} x
                                </Text>
                                <Image source={{uri:urlFor(item[0].image).url()}} className="rounded-full w-10 h-10"/>
                                <Text className="font-bold text-lg">
                                    {item[0].name}
                                </Text>
                            </View>
                            <View className="flex-row flex-1 justify-end space-x-2 items-center">
                                <Text className="font-bold text-lg">
                                    $ {item.reduce((total,i)=>{
                                        return total += i.price
                                    },0)}
                                </Text>
                                <TouchableOpacity onPress={()=>removeItem(key)}>
                                    <Text className="text-[#00DDBB] font-bold text-lg">
                                        Remove
                                    </Text>
                                </TouchableOpacity>
                               
                            </View>
                           
                        </View>
                    )
                })}
              
            </ScrollView>
            <View className="bg-white p-4 mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">${total}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery fee</Text>
                    <Text className="text-gray-400">${delivery}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Order total</Text>
                    <Text className="font-extrabold">${total+delivery}</Text>
                </View>
                <TouchableOpacity className="px-4 bg-[#00DDBB] rounded-lg p-3" onPress={()=>navigation.navigate('Preparation')}>
                    <Text className="text-center font-bold text-white">
                        Place Order
                    </Text>
                </TouchableOpacity>
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
  

export default BasketScreen