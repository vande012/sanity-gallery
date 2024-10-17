import { type SchemaTypeDefinition } from 'sanity'
import gallery from '../schemas/gallery'

export const schemaTypes = [gallery]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery],
}
