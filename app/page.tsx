import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import { Certifications } from '@/components/Certifications'
import { CertificationBanner } from '@/components/CertificationsBanner'
import { About } from '@/components/About'

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