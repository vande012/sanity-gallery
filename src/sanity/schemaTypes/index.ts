import { type SchemaTypeDefinition } from 'sanity'
import gallery from '../schemas/gallery'
import hero from '../schemas/hero'
import navbar from '../schemas/navbar'

export const schemaTypes = [gallery, hero, navbar]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, hero, navbar],
}
