import { View, Text, SafeAreaView, StyleSheet,Image, Platform, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon,  } from "react-native-heroicons/outline";
import Category from '../components/Category';
import Feature from '../components/Feature';
import client, { urlFor } from '../sanity'
import SearchRestaurant from '../components/SearchRestaurant';



const HomeScreen = () => {
  const [featureCate,setFeatureCate] = useState([])
  const [restaurant,setRestaurant] = useState([])
  const [search,setSearch] = useState([])
  const [text, setText] = useState('');

  const navigation = useNavigation()


  useEffect(()=>{
    client.fetch(`*[_type == 'resturant']{
      ...,
      dishes[]->
    }`).then((data)=>{
      setRestaurant(data)
    })
  },[])

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

  useEffect(()=>{
    let filter = restaurant.filter(item=>item.name.toLowerCase().includes(text.toLowerCase()))
    setSearch(filter)
  },[text])

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])



  return (
    <SafeAreaView style={styles.safeArea} className="bg-white">

      {/* Navbar */}
        <View className="flex-row items-center pb-3 mt-4 mx-4 space-x-2">
          <Image source={require('../assets/deli.png')}
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
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
          </View>        
        </View>
      {/* Search */}

    {/* Scroll View */}
    <ScrollView contentContainerStyle={{padding:10}} className="bg-gray-100">
          {/* Categories */}
          <Category/>
          {!text ?  
            featureCate && featureCate.map(category=>{
              return <Feature key={category._id} id={category._id} title={category.name} description={category.short_description}/>
            })
            :
              <View className="pt-5 mx-1">
                <View className="flex-1 flex-row mb-3 justify-between items-center">
                    <View>
                        <Text className="font-bold text-xl">Search results : {search.length}</Text>
                    </View>
                    {/* <ArrowRightIcon size={30} color="#00BBDD" /> */}
                </View>
              <ScrollView contentContainerStyle={{paddingTop:10}}
                   horizontal
                   showsHorizontalScrollIndicator={false}>                     
                {search.length > 0 ? search.map(item=>{
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
            
        
        }
        
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