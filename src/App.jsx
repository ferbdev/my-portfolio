import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Product } from './components/product'
import { Contact } from './components/contact'
import { Clients } from './components/clients'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      
    </div>
  )
}

export default App
