import React from 'react'
import Navbar from './Components/NavBar'
import Content from './Components/Content'
import Workshop from './Components/Workshop'
import Pyhack from './Components/Pyhack'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='font-Body mr-20'>
      
      <Navbar />
      <Content />
      <Workshop/>
      <Pyhack />
      <Faq />
      <Footer />
      
    </div>
  )
}

export default App