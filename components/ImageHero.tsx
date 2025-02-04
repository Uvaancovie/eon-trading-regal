// app/components/ImageHero.tsx
import Image from "next/image"

export default function ImageHero() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center bg-black text-white">
      {/* Background Image */}
      <Image
        src="/images/industrial-bg.webp"
        alt="Industrial background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="absolute inset-0 -z-10 opacity-50"
      />

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Quality Industrial &amp; Automotive Supplies
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          Delivering high-quality products with reliability and expertise.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="/products"
            className="rounded-md bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-gold"
          >
            View Products
          </a>
          <a
            href="/contact"
            className="rounded-md border border-gold px-6 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-black"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
