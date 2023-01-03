import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import data from "./data"


function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(card => {
    return(
      <Main 
        {...card}
      />
    )
  })

  return (
    <div>
      <Header />
      {cards}
      <Footer />
    </div>
  )
}

export default App
