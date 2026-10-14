import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="M Zeeshan" btnText="Click me" />
      <Card username="Rittik Singh" btnText="Visit me" />
    </>
  )
}

export default App
