import { View, Text, SafeAreaView, Image, StyleSheet, Platform, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon  } from "react-native-heroicons/outline";
import Category from '../components/Category';
import Feature from '../components/Feature';
import client from '../sanity'



const HomeScreen = () => {

  const [featureCate,setFeatureCate] = useState([])

  const navigation = useNavigation()

  useEffect(()=>{
    client.fetch(`
    *[_type == 'featured']{
      ...,
      resturants[]->{
        ...,
        dishes[]->
      }
    }
    `).then((data)=>{
      setFeatureCate(data)
    })
  },[])


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

 

  return (
    <SafeAreaView style={styles.safeArea} className="bg-white">

      {/* Navbar */}
        <View className="flex-row items-center pb-3 mt-4 mx-4 space-x-2">
          <Image source={{
            uri:"https://thispersondoesnotexist.com/image"
          }}
          className="w-7 h-7 rounded-full p-4"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">deliver now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color='#00CCBB' className="pt-5"/>   
            </Text>
          
          </View>
          <UserIcon size={30} color='#00CCBB'/>  
        </View>
      {/* Navbar */}

      {/* Search */}
        <View className="flex-row items-center space-x-2 pb-3 mx-4">
          <View className="flex-row items-center flex-1 bg-gray-200 p-2 space-x-2">
            <MagnifyingGlassIcon size={20} color="#00CCBB"/>
            <TextInput
              placeholder='Find restaurants'
              keyboardType='default'
            />
          </View>
        
          <AdjustmentsHorizontalIcon size={30} color="#00CCBB"/> 
        
        </View>
      {/* Search */}

    {/* Scroll View */}
    <ScrollView contentContainerStyle={{padding:10}} className="bg-gray-100">
          {/* Categories */}
          <Category/>
          {featureCate && featureCate.map(category=>{
            return <Feature key={category._id} id={category._id} title={category.name} description={category.short_description}/>
          })}
          {/* Feature */}
    </ScrollView>
    {/* Scroll View */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});


export default HomeScreen