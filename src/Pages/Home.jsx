import React from 'react'
import HeroSection from '../components/smallComponents/HeroSection'
import JoinUs from '../components/smallComponents/JoinUs'
import MissionAndVocabulary from '../components/smallComponents/MissionAndVocabulary'
import SuccessSection from '../components/smallComponents/SuccessSection'
import PricingPlans from '../components/smallComponents/PricingPlans'

export default function Home() {
  return (
    <div>
        <HeroSection/>
        <MissionAndVocabulary/>
        <SuccessSection/>
        <JoinUs/>
        <PricingPlans/>
    </div>
  )
}
