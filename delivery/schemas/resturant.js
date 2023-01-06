import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resturant Name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short_description',
      type: 'string',
      validation:(Rule)=>Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'latitude of the resturant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'longitude of the resturant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address of the resturant',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1 - 5)',
      type: 'number',
      validation:(Rule)=>Rule.required().min(1).max(5).error("Enter rating value between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation:(Rule)=>Rule.required(),
      to: [{ type: "category" }]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[{type:'reference',to:[{type:"dish"}]}]
    }),
  ],
})
