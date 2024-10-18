"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { GalleryCategory, Navbar } from "../lib/types";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavbarComponentProps {
  data: Navbar | null;
  categories: GalleryCategory[];
}

export function NavbarComponent({ data, categories }: NavbarComponentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCategoryClick = useCallback(
    (categoryName: string) => {
      const hash = `gallery-${categoryName.toLowerCase().replace(/\s+/g, "-")}`;

      // If we're already on the homepage, dispatch a custom event
      if (window.location.pathname === "/") {
        window.dispatchEvent(
          new CustomEvent("galleryNavigation", { detail: hash })
        );
      } else {
        // If we're on a different page, use router.push
        router.push(`/#${hash}`);
      }

      setIsMenuOpen(false);
    },
    [router]
  );

  if (!data) return null;

  return (
    <nav className="bg-[#f8f5e1] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Secondary Logo */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              {data.logo && (
                <Image
                  src={data.logo || ""}
                  alt="Interior Design Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              )}
            </Link>
            {data.secondaryLogo && (
              <Image
                src={data.secondaryLogo}
                alt="Logo Badge"
                width={120}
                height={50}
                className="h-14 w-auto"
              />
            )}
            {data.thirdLogo && (
              <Image
                src={data.thirdLogo}
                alt="Logo Badge"
                width={120}
                height={50}
                className="h-14 w-auto"
              />
            )}
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-[#6e4140] hover:text-gray-700 transition-colors"
              >
                About
              </Link>
              <div className="relative group">
                <button className="text-[#6e4140] hover:text-gray-700 transition-colors">
                  Galleries
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {categories.map((category) => (
                    <button
                      key={category._key}
                      onClick={() => handleCategoryClick(category.name)}
                      className="block w-full text-left px-4 py-2 text-sm text-[#6e4140] hover:bg-gray-100"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href="https://www.houzz.com/pro/colleenjt"
                className="text-[#6e4140] hover:text-gray-700 transition-colors"
              >
                Houzz Profile
              </Link>

              <Link href="/#contact-form">
                <Button className="bg-[#9a992e] hover:bg-[#3F6132] text-white">Contact</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            {categories.map((category) => (
              <button
                key={category._key}
                onClick={() => handleCategoryClick(category.name)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {category.name}
              </button>
            ))}
            {data.ctaText && data.ctaLink && (
              <Link
                href={data.ctaLink}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {data.ctaText}
              </Link>
            )}
            <a
              href="https://www.houzz.com/pro/colleenjt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <Image
                src="/houzz.png"
                alt="Houzz Icon"
                width={100}
                height={100}
                className="h-13 w-13"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
