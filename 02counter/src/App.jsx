import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]=useState(0)

  const addValue = ()=>{
    setCounter(counter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai Counter</h1>
      <h2>value : {counter}</h2>

      <button 
      onClick={addValue}
      >Add One</button>
      <br />
      <button
      onClick={removeValue}
      >Remove One</button>
    </>
  )
}

export default App
