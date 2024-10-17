import { client } from '../../lib/sanity';
import { GalleryType } from '../../lib/types';

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