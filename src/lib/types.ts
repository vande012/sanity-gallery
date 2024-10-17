import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface GalleryImage {
  _key: string;
  asset: SanityImageSource;
  alt?: string;
  description?: string;
}

export interface GalleryCategory {
  _key: string;
  name: string;
  images: GalleryImage[];
}

export interface GalleryType {
  _id: string;
  title: string;
  categories: GalleryCategory[];
}
