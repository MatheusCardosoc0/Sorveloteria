import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Request from './components/Request'
import About from './components/About'
import Awards from './components/Awards'
import Footer from './components/Footer'
//https://media.discordapp.net/attachments/989268383751106560/1047997297042137128/MatheusCardosoc_an_ice_cream_cone_with_chocolate_vanilla_and_st_6f581dba-971b-4abd-98c6-a51d7497ffeb.png?width=491&height=491
function App() {
  
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Request />
      <About />
      <Awards />
      <Footer />
    </main>
  )
}

export default App
