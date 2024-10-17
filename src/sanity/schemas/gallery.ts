import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Gallery Title',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'object',
          name: 'category',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Category Name',
            }),
            defineField({
              name: 'images',
              type: 'array',
              title: 'Images',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                    }),
                    defineField({
                      name: 'description',
                      type: 'text',
                      title: 'Description',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
