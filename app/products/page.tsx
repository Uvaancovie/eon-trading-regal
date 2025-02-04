'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
}


const productCategories: { name: string, products: Product[] }[] = [
  {
    name: "Industrial Supplies",
    products: [
      { id: 1, name: "Safety Gloves", sku: "IS-001", price: 9.99, stock: 500 },
      { id: 2, name: "Hard Hat", sku: "IS-002", price: 24.99, stock: 200 },
      { id: 3, name: "Safety Goggles", sku: "IS-003", price: 14.99, stock: 300 },
    ]
  },
  {
    name: "Automotive Parts",
    products: [
      { id: 4, name: "Oil Filter", sku: "AP-001", price: 7.99, stock: 1000 },
      { id: 5, name: "Brake Pads", sku: "AP-002", price: 39.99, stock: 150 },
      { id: 6, name: "Spark Plugs", sku: "AP-003", price: 3.99, stock: 2000 },
    ]
  },
  {
    name: "Electrical Components",
    products: [
      { id: 7, name: "Circuit Breaker", sku: "EC-001", price: 29.99, stock: 100 },
    ]
  }
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filterProducts = (products: Product[]) => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      
      <Input
        type="search"
        placeholder="Search products..."
        className="max-w-sm mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Tabs defaultValue={productCategories[0].name} className="w-full">
        <TabsList className="mb-4">
          {productCategories.map((category) => (
            <TabsTrigger key={category.name} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {productCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filterProducts(category.products).map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
