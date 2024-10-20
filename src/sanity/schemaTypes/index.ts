import { type SchemaTypeDefinition } from 'sanity'
import gallery from '../schemas/gallery'
import hero from '../schemas/hero'
import navbar from '../schemas/navbar'
import about from '../schemas/about'
import review from '../schemas/review'

export const schemaTypes = [gallery, hero, navbar, about, review]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, hero, navbar, about, review],
}
