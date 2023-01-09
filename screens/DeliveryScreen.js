import { View, Text, SafeAreaView,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from "react-native-progress"
import {useNavigation} from "@react-navigation/native"
import MapView from 'react-native-maps';


const DeliveryScreen = () => {
    const navigation = useNavigation()
  return (
    <View className="bg-[#00DDBB] flex-1">
        <SafeAreaView  className="mt-5 z-50">
            <View className="flex-row justify-between px-4 p-5">
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <XCircleIcon size={30} color="white"/>
                </TouchableOpacity>
                <Text className="font-bold text-white">Order Help</Text>
            </View>
            <View className="space-y-2 p-5 rounded-lg shadow-md  z-50 bg-white mx-5">
                <Text className="text-gray-400 font-bold">Estimated Arrvial</Text>
                <Text className="text-3xl font-bold">35-45 Minutes</Text>
                <Progress.Bar progress={0.3} width={200} indeterminate={true} color="#00DDBB"  />
                <Text className="text-gray-400 font-bold">Your order is being prepared</Text>
            </View>
        </SafeAreaView>
        <MapView
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
            }}
            className="flex-1 -mt-10 z-0"
            mapType='mutedStandard'
        />
        <SafeAreaView>
            <View className="bg-white h-20 p-1 px-4 items-center justify-between flex-row">
                <View className="flex-row items-center space-x-2">
                    <Image source={require('../assets/deli.png')}
                    className="h-10 w-10 rounded-full"
                    />
                    <Text className="text-[#00DDBB] font-bold">
                        I'm your rider
                    </Text>
                </View>
                
                <View >
                    <Text className="text-[#00DDBB] font-bold text-lg">Call</Text>
                </View>
            </View>    
        </SafeAreaView>

    </View>
  )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
  });
  

export default DeliveryScreen