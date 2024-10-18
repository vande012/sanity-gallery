import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/sanity'
import { aboutPageQuery } from '../../sanity/lib/queries'
import { AboutPage } from '../../lib/types'
import { NavbarComponent } from '../../components/navbar'
import { Navbar } from '../../lib/types';
import { navbarQuery } from '../../sanity/lib/queries';
import { GalleryCategory } from '../../lib/types';
import { galleryCategoriesQuery } from '../../sanity/lib/queries';

export default async function About() {
  const aboutData: AboutPage = await client.fetch(aboutPageQuery)
  const navbar: Navbar = await client.fetch(navbarQuery);
  const categories: GalleryCategory[] = await client.fetch(galleryCategoriesQuery);

  return (
    <>
      <NavbarComponent data={navbar} categories={categories} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/2 h-[50vh] relative aspect-square md:aspect-auto">
            <Image
              src={aboutData.headerImage}
              alt="About Us Header"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6 text-center">{aboutData.title}</h1>
            <div className="prose max-w-none">
              <PortableText 
                value={aboutData.content} 
                components={{
                  block: {
                    normal: ({children}) => <p className="mb-4">{children}</p>,
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="prose max-w-none mx-auto text-center">
          <PortableText 
            value={aboutData.additionalContent || []} 
            components={{
              block: {
                normal: ({children}) => <p className="mb-4 mt-2">{children}</p>,
              },
            }}
          />
        </div>
      </div>
    </>
  )
}
