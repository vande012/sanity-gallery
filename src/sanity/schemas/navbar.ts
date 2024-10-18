import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navbar and Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Primary Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondaryLogo',
      title: 'Secondary Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thirdLogo',
      title: 'Third Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerImage',
      title: 'Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string', title: 'Link Text' },
            { name: 'url', type: 'string', title: 'URL' },
          ],
        },
      ],
    }),
  ],
})
