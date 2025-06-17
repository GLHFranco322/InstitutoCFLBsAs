import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { SectionOne } from './components/sections/SectionOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header />
      < SectionOne />
    </>
  )
}

export default App
