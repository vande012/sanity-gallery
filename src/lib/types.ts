import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from '@portabletext/types'
import { Image } from 'sanity'

export interface GalleryImage {
  _key: string;
  asset: SanityImageSource;
  alt?: string;
  description?: string;
}

export interface GalleryCategory {
  _key: string;
  name: string;
  slug: string;
  images: GalleryImage[];
}

export interface GalleryType {
  _id: string;
  title: string;
  categories: GalleryCategory[];
}

export interface Hero {
    header: string
    paragraph: PortableTextBlock[]
    button: {
      text: string
      link: string
    }
    image: Image
  }

  export interface Navbar {
    logo: string
    secondaryLogo?: string
    thirdLogo?: string
    ctaText: string
    ctaLink: string
  }

export interface AboutPage {
    title: string;
    headerImage: string;
    content: PortableTextBlock[];
    additionalContent?: PortableTextBlock[];
  }

export interface Review {
  name: string;
  text: string;
  rating: number;
}
