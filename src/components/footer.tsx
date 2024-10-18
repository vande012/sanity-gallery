import Link from "next/link";
import Image from "next/image";
import { Footer as FooterType } from "../lib/types";

export default function Footer({ data }: { data: FooterType }) {
  return (
    <footer className="bg-[#f8f6e0] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and NARI Image Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            {data.footerLogo && (
              <Image
                src={data.footerLogo}
                alt="Footer Logo"
                width={200}
                height={50}
                className="mb-4 md:mb-0 md:mt-8"
              />
            )}
            {data.footerImage && (
              <Image
                src={data.footerImage}
                alt="NARI Logo"
                width={150}
                height={50}
                className="mt-4 md:mt-0 md:ml-4"
              />
            )}
          </div>

          {/* Navigation Links Section */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-col items-center space-y-2 text-lg text-[#6e4140]">
              {data.footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="hover:underline">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Information Section */}
          <div className="text-[#6e4140]">
            <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
            <p>Colleen J. Thompson</p>
            <p>Phone: (414) 378-5569</p>
            <p>Email: colleenjt@icloud.com</p>
            <p>6416 W. North Ave. Wauwatosa, WI 53213</p>
          </div>
        </div>

        {/* Copyright and Credits Section */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-[#6e4140]">
          <p>
            &copy; {new Date().getFullYear()} i.e. Design. All rights reserved.
          </p>
          <p className="mt-2">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/ryan-vandehey/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#8a5251]"
            >
              Ryan Vandehey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
