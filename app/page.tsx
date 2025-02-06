"use client"

import React from 'react'
import Hero from '@/app/components/Hero'
import Services from '@/app/components/Services'
import { Certifications } from '@/app/components/Certifications'
import { CertificationBanner } from '@/app/components/CertificationsBanner'
import { About } from '@/app/components/About'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      
      <CertificationBanner></CertificationBanner>
      <Services></Services>
      <Certifications></Certifications>
      <About></About>
    </div>
  )
}

export default Home