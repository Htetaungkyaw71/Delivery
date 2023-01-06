import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured of the returant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category Name',
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
      name: 'resturants',
      title: 'Featured of the resturants',
      type: 'array',
      of:[{type:"reference",to:[{type:"resturant"}]}]
    }),

  ],
})
