import { Shield, Package, Clock } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Eon General Supply Company (Pty) Ltd</h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Company</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="mt-1 text-gray-600">
              Eon General Supply Company  is a 100% black woman and youth owned general supply company. We are registered
              on the central supplier database and fully tax compliant.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Products</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="mt-1 text-gray-600">
              We offer a wide range of industrial supplies to vehicle components. All our products are of high quality,
              made by leading manufacturers in their respective industries.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <Shield className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Quality Assured</h3>
              <p className="mt-2 text-sm text-gray-500">
                Our products are sourced from leading manufacturers, ensuring top-notch quality.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <Package className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Wide Range</h3>
              <p className="mt-2 text-sm text-gray-500">
                From industrial supplies to vehicle components, we have got you covered.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <Clock className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-sm text-gray-500">
                We ensure the shortest turnaround time from order to delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Goal</h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="mt-1 text-gray-600">
              Our principal goal is a satisfied customer. We strive to ensure the shortest turnaround time from order to
              delivery, maintaining high-quality standards throughout our service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

