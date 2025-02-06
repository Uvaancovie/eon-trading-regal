import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col justify-center px-4 py-12 sm:h-[80vh] md:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg-2.jpg"
        alt="Industrial background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-4 font-serifHeading text-4xl font-bold leading-tight text-white md:text-5xl">
          Quality Industrial &amp; Automotive Supplies
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          Eon Trading Regal is a 100% Black, Woman, and Youth-Owned supplier committed to delivering top-tier products
          for every industry need.
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/products"
            className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-gold"
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-black"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

