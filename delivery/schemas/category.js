import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image of the category',
      type: 'image',
    }),
  ],
})
