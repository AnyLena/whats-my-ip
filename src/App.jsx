import { useState } from 'react'
import './App.css'
import DisplayIp from './components/DisplayIp'

function App() {
  const [count, setCount] = useState(0)

  // console.log(import.meta.env.VITE_REACT_KEY_IPIFY)
  return (
    <>
      <DisplayIp />
    </>
  )
}

export default App
