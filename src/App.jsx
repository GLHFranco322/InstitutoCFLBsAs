import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { SectionOne } from './components/sections/SectionOne'
import SectionTwo from './components/sections/SectionTwo'
import { SectionThree } from './components/sections/SectionThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header />
      < SectionOne />
      < SectionTwo />
      < SectionThree />
    </>
  )
}

export default App
