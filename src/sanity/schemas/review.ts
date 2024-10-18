import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({ 
      name: 'name', 
      type: 'string',
      title: 'Name'
    }),
    defineField({ 
      name: 'text', 
      type: 'text',
      title: 'Text'
    }),
    defineField({ 
      name: 'rating', 
      type: 'number',
      title: 'Rating',
      validation: Rule => Rule.min(1).max(5).integer()
    }),
  ],
})
