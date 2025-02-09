"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/components/ui/carousel"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"

const aboutItems = [
  {
    title: "Our Mission",
    content:
      "To provide top-quality industrial and automotive supplies while promoting diversity and excellence in business.",
    lottieFile: "/lottie/impact.json",
  },
  {
    title: "Our Team",
    content: "A diverse group of professionals committed to delivering the best products and services to our clients.",
    lottieFile: "/lottie/commitment.json",
  },
  {
    title: "Our Commitment",
    content:
      "We are dedicated to maintaining the highest standards of quality, integrity, and customer satisfaction in all our operations.",
    lottieFile: "/lottie/commitment.json",
  },
  {
    title: "Our Impact",
    content:
      "As a 100% Black, Woman, and Youth-Owned business, we're proud to contribute to the transformation and growth of South Africa's economy.",
    lottieFile: "/lottie/impact.json",
  },
]

export function About() {
  const [lottieData, setLottieData] = useState<object[]>([])

  useEffect(() => {
    const loadLottieFiles = async () => {
      const loadedData = await Promise.all(
        aboutItems.map(async (item) => {
          const response = await fetch(item.lottieFile)
          return response.json()
        }),
      )
      setLottieData(loadedData)
    }

    loadLottieFiles()
  }, [])

  return (
    <section className="py-20 bg-neutralBg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Eon General Supply Company (Pty) Ltd</h2>
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {aboutItems.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-gold">
                    <CardContent className="flex flex-col md:flex-row items-center p-6">
                      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
                        {lottieData[index] && (
                          <Lottie
                            animationData={lottieData[index]}
                            loop={true}
                            style={{ width: "100%", height: "400px" }}
                          />
                        )}
                      </div>
                      <div className="w-full md:w-1/2">
                        <Badge className="mb-4 bg-gold text-black">{item.title}</Badge>
                        <p className="text-lg text-darkGray">{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-darkGray mb-6">
            Eon General Supply Company (Pty) Ltd is a 100% Black, Woman and Youth owned General Supply Company registered on the CENTRAL
            SUPPLIER DATABASE  and Fully tax compliant.
          </p>
          <p className="text-lg text-darkGray">
            We offer a wide range of Industrial supplies to Vehicle components. All our products are of High quality
            made from leading manufacturers in their various industries. Our principle goal is a satisfied customer
            ensuring the shortest turn around time from order to delivery.
          </p>
        </div>
      </div>
    </section>
  )
}

