import { FaIndustry, FaTools, FaShippingFast } from "react-icons/fa"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"

const serviceData = [
  {
    name: "Industrial Supplies",
    description: "Top-tier materials and tools for various industrial applications",
    icon: FaIndustry,
  },
  {
    name: "Automotive Parts",
    description: "High-quality components for automotive maintenance and repair",
    icon: FaTools,
  },
  {
    name: "Procurement Solutions",
    description: "Efficient sourcing and supply chain management services",
    icon: FaShippingFast,
  },
]

const tableData = [
  { category: "Industrial", items: 1500, suppliers: 50, leadTime: "3-5 days" },
  { category: "Automotive", items: 2000, suppliers: 75, leadTime: "2-4 days" },
  { category: "Electronics", items: 1000, suppliers: 30, leadTime: "4-7 days" },
  { category: "Safety Equipment", items: 500, suppliers: 20, leadTime: "1-3 days" },
]

export default function Services() {
  return (
    <section className="w-full bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl">Our Industrial & Automotive Solutions</h2>
        <p className="mx-auto max-w-3xl text-lg text-darkGray">
          Eon Trading Regal specializes in industrial supplies, high-quality automotive parts, and efficient procurement
          solutions for your business.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
        {serviceData.map((service, index) => (
          <div key={index} className="rounded-lg border border-gray-200 bg-neutralBg p-6 shadow-sm hover:shadow-lg">
            <service.icon className="mb-4 text-4xl text-gold" />
            <h3 className="mb-2 text-xl font-semibold text-black">{service.name}</h3>
            <p className="text-darkGray">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Data Table */}
      <div className="mx-auto mt-16 max-w-5xl">
        <h3 className="mb-6 text-2xl font-bold text-black">Our Inventory Overview</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Suppliers</TableHead>
              <TableHead>Lead Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.items}</TableCell>
                <TableCell>{row.suppliers}</TableCell>
                <TableCell>{row.leadTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

