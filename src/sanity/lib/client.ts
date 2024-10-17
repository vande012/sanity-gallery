import { createClient } from 'next-sanity'
import { Hero } from '@/lib/types'
import { apiVersion, dataset, projectId } from '../env'
import { heroQuery } from './queries'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function getHero(): Promise<Hero> {
  return client.fetch(heroQuery)
}

const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}