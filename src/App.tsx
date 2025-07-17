import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Contact from './Contact'
import EducationTimeline from './Education'
import ProjectsCarousel from './Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <EducationTimeline />
      <ProjectsCarousel />
      <Contact />
    </>
  )
}

export default App
