import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animateable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'

const PreparationScreen = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        }, 3000)
    },[])
  return (
    <View className="flex-1 bg-[#00DDBB] justify-center items-center">
        <Progress.Circle size={60} indeterminate={true} color="white" />
            <Animateable.Text
            animation='slideInUp'
            iterationCount={1}
            className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order
            </Animateable.Text>

    </View>
  )
}

export default PreparationScreen