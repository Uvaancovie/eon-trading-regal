'use client'

import { useState } from "react"
import { Badge } from "@/app/components/ui/badge"
import { motion } from "framer-motion"

const certifications = [
  { label: "VAT No.", value: "4310315355" },
  { label: "Company Reg No.", value: "2023/868724/07" },
  { label: "CSD No.", value: "CSD Registered" },
  { label: "Tax Compliant", value: "" },
]

export function CertificationBanner() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full bg-black/90 py-4 overflow-hidden border-t border-b border-gold"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center justify-center gap-8 md:gap-16"
        animate={{
          x: isHovered ? 0 : [-100, 0],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        {[...certifications, ...certifications].map((cert, index) => (
          <div key={index} className="flex items-center gap-2 text-white whitespace-nowrap">
            <span className="text-gold font-semibold">{cert.label}</span>
            <Badge variant="outline" className="border-gold text-gold">
              {cert.value}
            </Badge>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

