import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import FeatureCard from './FeatureCard'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import client, { urlFor } from '../sanity';

const Feature = ({id,title,description}) => {
  const [restaurants,setResturant] = useState([])

  useEffect(()=>{
    client.fetch(`
    *[_type == 'featured' && _id == '${id}']{
      ...,
      resturants[]->{
        ...,
        dishes[]->
      }
    }[0]
    `,
    {id}
    ).then((data)=>{
      setResturant(data.resturants)
    })

  },[])




  return (
    <View className="pt-5 mx-1">
        <View className="flex-1 flex-row justify-between items-center">
            <View>
                <Text className="font-bold text-xl">{title}</Text>
                <Text className="text-gray-400 text-sm">{description}</Text>
            </View>
            <ArrowRightIcon size={30} color="#00BBDD" />
        </View>
        <ScrollView contentContainerStyle={{paddingTop:10}}
             horizontal
             showsHorizontalScrollIndicator={false}>        
            {restaurants && restaurants.map(item=>{
              return  <FeatureCard 
              key={item._id}
              imgUrl={urlFor(item.image).url()}
              title={item.name}
               id = {item._id}
               rating={item.rating}
               genre={item.genre}
               address={item.address}
               short_description={item.short_description}
               dishes={item.dishes}
               long={item.long}
               lat={item.lat}
             />
            })}

           
         
             
        </ScrollView>
    </View>
 
  )
}

export default Feature