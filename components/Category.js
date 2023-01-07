import { ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import CategoryCard from './CategoryCard'
import client from '../sanity'
import { urlFor } from '../sanity'


export default function Category() {
  const [category,setCategory] = useState([])

  useEffect(()=>{
    client.fetch(`
    *[_type == 'category']
    `).then((data)=>{
      setCategory(data)
    })
  },[])

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:5}}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
      {category&& category.map(item=>{
        return   <CategoryCard 
        key={item._id}
        id={item._id}
        imgUrl={urlFor(item.image).url()}
        title={item.name}/>
      })}
  
  
    </ScrollView>
  )
}