import React, { useEffect } from 'react'
import HeroSection from '../components/smallComponents/HeroSection'
import JoinUs from '../components/smallComponents/JoinUs'
import MissionAndVocabulary from '../components/smallComponents/MissionAndVocabulary'
import SuccessSection from '../components/smallComponents/SuccessSection'
import PricingPlans from '../components/smallComponents/PricingPlans'
import { useAuth } from '../authProvider/AuthProvider'

export default function Home() {
  const {setTitle} = useAuth();
  useEffect(()=>{
    setTitle('Home|Lingo-Bingo')
  },[])
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
