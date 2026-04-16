import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
  }
const decreaseValue=()=>{
   setCounter(counter - 1);  
   console.log(counter);
}
  return (
    <>
     
      <h1>demo</h1>
      <h2> counter value:{counter}</h2>
      <button onClick={addValue}> add value: {counter}</button>
         
         <button onClick={decreaseValue}>decrease value: {counter}</button>
    </>
  )
}

export default App
