import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeatureCard from './FeatureCard'
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const Feature = ({title,description}) => {
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
            <FeatureCard 
             imgUrl="https://img.freepik.com/free-photo/fried-rice-with-crab-meat-white-plate_74190-2588.jpg?w=740&t=st=1673011151~exp=1673011751~hmac=ab8e611ade3a1b28b8795e9df72602992b0258ddfeb4067c386272e1c7758223"
             title="Testing"
              id = {123}
              rating={4.5}
              genre="Japanese"
              address="123 Main st"
              short_description="This is short description"
              dishes={[]}
              long={20}
              lat={0}
            />
              <FeatureCard 
             imgUrl="https://img.freepik.com/free-photo/stir-fried-noodles-with-ink-white-plate_1150-22337.jpg?w=740&t=st=1673011174~exp=1673011774~hmac=b963a9ace0858af5d2b38c24ef3fed918980720813eabe1bc03e1b4b64e46c95"
             title="Testing"
              id = {123}
              rating={4.5}
              genre="Japanese"
              address="123 Main st"
              short_description="This is short description"
              dishes={[]}
              long={20}
              lat={0}
            />
              <FeatureCard 
             imgUrl="https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-wall_181624-34158.jpg?w=740&t=st=1673011194~exp=1673011794~hmac=347a7b36d53004337b89d91072564489c49c1f63e6b45d1776edc28e1ca91901"
             title="Testing"
              id = {123}
              rating={4.5}
              genre="Japanese"
              address="123 Main st"
              short_description="This is short description"
              dishes={[]}
              long={20}
              lat={0}
            />
        </ScrollView>
    </View>
 
  )
}

export default Feature