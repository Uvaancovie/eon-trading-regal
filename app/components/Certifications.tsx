import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent } from "@/app/components/ui/card"
import { CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Central Supplier Database",
    id: "Certified",
    description: "Registered and verified supplier",
  },
  {
    title: "Tax Compliance",
    id: "Certified",
    description: "Fully tax compliant status",
  },
  {
    title: "Company Registration",
    id: "2023/868724/07",
    description: "Registered business entity",
  },
  {
    title: "VAT Registration",
    id: "4310315355",
    description: "Value Added Tax registered",
  },
]

export function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-2 border-gold hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 mb-4 text-gold" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <Badge variant="secondary" className="mb-4">
                  {cert.id}
                </Badge>
                <p className="text-darkGray">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

