"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GalleryImage } from "../lib/types";
import type { GalleryType } from "../lib/types";
import { urlFor } from "../lib/sanity";

interface GalleryProps {
  items: GalleryType;
}
const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...items.categories.map((cat) => cat.name)];

  const displayImages: GalleryImage[] =
    selectedCategory === "All"
      ? items.categories.flatMap((cat) => cat.images)
      : items.categories.find((cat) => cat.name === selectedCategory)?.images ||
        [];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{items.title}</h2>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayImages.map((image) => (
          <Dialog key={image._key}>
            <DialogTrigger asChild>
              <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Image
                  src={urlFor(image.asset).width(800).height(600).url()}
                  alt={image.alt || "Gallery image"}
                  width={800}
                  height={600}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full">
              <div className="relative">
                <Image
                  src={urlFor(image.asset).width(1200).height(900).url()}
                  alt={image.alt || "Gallery image"}
                  width={1200}
                  height={900}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="mt-2 text-center text-sm text-gray-500">
                {image.description}
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
