import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/Input/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Input value = {count} onChange={(e) => {setCount(e.target.value)}} />
  )
}

export default App
