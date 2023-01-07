import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/basketSlice'

const DishRow = ({id,name, short_description, price, image}) => {
    const [isPressed, setisPressed] = useState(false)
    const {items} = useSelector((state)=>state.basket)
    const count = items.filter(item=>item.id === id)
    const dispatch = useDispatch()

    const addItem = ()=>{
        dispatch(increment({id,name, short_description, price, image}))
    }
    const removeItem = (id)=>{
        if(!items.length > 0) return
        dispatch(decrement({id}))
    }


  return (
    <>
       <TouchableOpacity onPress={()=>setisPressed(!isPressed)}>
        <View className="flex-row items-center px-4 justify-between mb-3 " >
            <View>
                <Text className="font-bold text-lg">{name}</Text>
                <Text className="text-gray-500">{short_description}</Text>
                <Text  className="text-gray-500">${price}</Text>
            </View>
            <Image source={{uri:urlFor(image).url()}} className="w-16 h-16  bg-gray-300 rounded"/>
    
        </View>
    </TouchableOpacity>
    {isPressed &&
     <TouchableOpacity>
     <View className="flex-row px-2 mb-5 items-center">
            <TouchableOpacity onPress={()=>removeItem(id)}>
                <MinusCircleIcon color="white" size={40} fill="#00DDBB"/>
            </TouchableOpacity>
            <Text className="text-lg">{count.length}</Text>
            <TouchableOpacity onPress={()=>addItem()}>
                <PlusCircleIcon color="white" size={40} fill="#00DDBB"/>    
            </TouchableOpacity>
         </View>
     </TouchableOpacity>
    }
   
    </>
 
  )
}

export default DishRow