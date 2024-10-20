import { client } from '../../lib/sanity';
import { GalleryType } from '../../lib/types';
import { groq } from 'next-sanity';

export async function getGallery(): Promise<GalleryType> {
    return client.fetch(`*[_type == "gallery"][0]{
      _id,
      title,
      categories[]{
        _key,
        name,
        images[]{
          _key,
          asset,
          alt,
          description
        }
      }
    }`)
  }

  export const heroQuery = groq`*[_type == "hero"][0]{
    header,
    paragraph,
    button{
      text,
      link
    },
    "image": image.asset->url
  }`

export const navbarQuery = groq`
  *[_type == "navbar"][0] {
    "logo": logo.asset->url,
    "secondaryLogo": secondaryLogo.asset->url,
    "thirdLogo": thirdLogo.asset->url,
    ctaText,
    ctaLink
  }
`

export const galleryCategoriesQuery = groq`
  *[_type == "gallery"][0].categories[]{
    _key,
    name,
    "slug": name
  }
`
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    title,
    "headerImage": headerImage.asset->url,
    content,
    additionalContent
  }
`
export const reviewsQuery = groq`
  *[_type == "review"] | order(_createdAt desc) {
    name,
    text,
    rating
  }
`

export const footerQuery = groq`
  *[_type == "navbar"][0] {
    "footerLogo": footerLogo.asset->url,
    "footerImage": footerImage.asset->url,
    footerLinks[] {
      text,
      url
    }
  }
`
