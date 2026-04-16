import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card username=" july"  designation="CEO" rating="4.5" followers="10k"  offconnnection="10k" btnText="Read More" />
<Card username="sham" designation="designer" rating="4.2" followers="8k" offconnnection="30k" btnText="Learn More" />
 <Card username="lie"  designation="tester" rating="4.0" followers="5k" offconnnection="40k" btnText="Read More" />
<Card username="alexa"  designation="developer" rating="4.8" followers="12k" offconnnection="50k" btnText="Read More" />

    </>
  )
}

export default App
