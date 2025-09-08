import './App.css'
import Header from './Header'
import Contact from './Contact'
import EducationTimeline from './Education'
import ProjectsCarousel from './Projects'
import ServicesSection from './Services'
import { Toaster } from 'react-hot-toast'

function App() {



  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />


      <Header />
      <EducationTimeline />
      <ProjectsCarousel />
      <ServicesSection />
      <Contact />
    </>
  )
}

export default App
