import { useState } from 'react'
import UserForm from './components/UserForm'
import HeroSection from './components/HeroSection'
import FeaturePreview from './components/FeaturePreview'
import GitHubSection from './components/GithubSection'

function Home() {

  return (
    <>
      <HeroSection/>
      <FeaturePreview/>
      <GitHubSection/>
    </>
  )
}

export default Home
