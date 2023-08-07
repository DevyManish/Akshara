import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Content from './components/Content'
import Courses from './components/Courses'
import Cards from './components/Cards'
import  Footer  from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <hr></hr>
      <div className="flex justify-center mt-5">
       <Hero/>
      </div>
      
      <hr></hr>
      <Content/>
      <hr></hr>
      <Courses/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
