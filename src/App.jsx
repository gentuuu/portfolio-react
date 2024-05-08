import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from "react-router-dom"
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <>
 
        <BrowserRouter>
          <Navbar />  
          <Header />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </BrowserRouter>
 
     
    </>
  )
}

export default App
