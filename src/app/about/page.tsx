import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4">
            Welcome to our interior design studio. We are passionate about creating beautiful, 
            functional spaces that reflect our clients' unique personalities and lifestyles.
          </p>
          <p className="mb-4">
            With years of experience in the industry, our team of skilled designers brings creativity, 
            expertise, and attention to detail to every project we undertake.
          </p>
          <p>
            Whether you're looking to renovate your home, design a new office space, or simply 
            refresh your current interiors, we're here to help bring your vision to life.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/about-image.jpg"
            alt="Interior Design Studio"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}