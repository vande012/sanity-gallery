'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Review } from '@/lib/types'

interface ReviewComponentProps {
  initialReviews: Review[]
}

export function ReviewComponent({ initialReviews }: ReviewComponentProps) {
  const [reviews] = useState<Review[]>(initialReviews)

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {reviews.map((review, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/reviews" passHref>
          <Button className="bg-[#9a992e] hover:bg-[#3F6132] text-white">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}
