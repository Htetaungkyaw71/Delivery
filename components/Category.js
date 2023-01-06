import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Category() {
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:5}}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
    <CategoryCard imgUrl="https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?w=740&t=st=1673011065~exp=1673011665~hmac=0908a40ea5cc6db3dbbbf3b936bacc1b08010c44c02ec50286dd840951feb926" title="Testing"/>
    <CategoryCard imgUrl="https://img.freepik.com/free-photo/fried-rice-fried-egg-served-with-fish-sauce-cucumber_1150-27761.jpg?w=740&t=st=1673011101~exp=1673011701~hmac=39ec2d03e3988055223b10a9824c305fc20d40b0f3e9614acc29c08589e552bd" title="Testing"/>
    <CategoryCard imgUrl="https://img.freepik.com/free-photo/thai-food-som-tum-papaya-salad_1150-35488.jpg?w=740&t=st=1673011119~exp=1673011719~hmac=e75453dbf4420cf361361d284ab3fb5dc7f73eed7ff93e1e8731875d8430be8b" title="Testing"/>
    <CategoryCard imgUrl="https://img.freepik.com/free-photo/sushi-dish-asian-restaurant_23-2148195573.jpg?w=740&t=st=1673011132~exp=1673011732~hmac=db7c5f34b0619526034bbfc623ae3c1986a891800d2008556c5e50ea9f632bf7" title="Testing"/>
    </ScrollView>
  )
}