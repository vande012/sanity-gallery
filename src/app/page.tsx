import { GalleryType } from '../lib/types'; // Import the Gallery interface
import Gallery from "../components/gallery";
import { getGallery } from "../sanity/lib/queries";

export default async function Home() {
  const galleryImage: GalleryType = await getGallery();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <Gallery items={galleryImage} />
    </main>
  );
}
