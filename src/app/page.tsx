import { GalleryCategory, GalleryType } from '../lib/types'; // Import the Gallery interface
import Gallery from "../components/gallery";
import { getGallery } from "../sanity/lib/queries";
import { HeroComponent } from "../components/hero"; 
import { Hero } from "../lib/types";
import { heroQuery } from "../sanity/lib/queries";
import { client } from "../sanity/lib/client";
import { ContactForm } from "../components/contact-form";
import { NavbarComponent } from '@/components/navbar';
import { Navbar } from '../lib/types';
import { navbarQuery } from '../sanity/lib/queries';
import { galleryCategoriesQuery } from '../sanity/lib/queries';
import { ReviewComponent } from '@/components/review-component';
import { Review } from '../lib/types';
import { reviewsQuery } from '../sanity/lib/queries';

export default async function Home() {
  const galleryImage: GalleryType = await getGallery();
  const hero: Hero = await client.fetch(heroQuery);
  const navbar: Navbar = await client.fetch(navbarQuery);
  const categories: GalleryCategory[] = await client.fetch(galleryCategoriesQuery);
  const reviews: Review[] = await client.fetch(reviewsQuery);
  return (
    <main className="">
      <NavbarComponent data={navbar} categories={categories} />
      <HeroComponent hero={hero}/>
      <Gallery items={galleryImage} />
      <ReviewComponent initialReviews={reviews} />
      <section id="contact-form">
      <ContactForm />
      </section>
    </main>
  );
}
