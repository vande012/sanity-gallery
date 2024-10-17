'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Hero } from "@/lib/types"
import { PortableText } from '@portabletext/react'
import { urlForImage } from '../sanity/lib/client'

interface HeroComponentProps {
  hero: Hero
}

export function HeroComponent({ hero }: HeroComponentProps) {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image - on top for mobile, on right for desktop */}
        <div className="w-full md:w-1/2 md:order-last">
          <div className="relative w-full aspect-[4/3] md:aspect-square">
            <Image
              src={urlForImage(hero.image).url()}
              alt="Hero image"
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            {hero.header}
          </h1>
          <div className="text-xl text-gray-600 space-y-4">
            <PortableText 
              value={hero.paragraph}
              components={{
                block: {
                  normal: ({children}) => <p className="mb-4">{children}</p>,
                },
              }}
            />
          </div>
          <Button size="lg" className="text-lg px-8" asChild>
            <a href={hero.button.link}>{hero.button.text}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
