import { useState } from 'react'

import './App.css'
import { Home } from './components/home'



function App() {
  let [count, setCount] = useState(0)

  const handleview = (e)=>{
   
    setCount(count + 1)
    console.log(count)
  }
  return (
    
    <>
      <button onClick={handleview}>
        {count}
      </button>
    {
      count == 1 &&  <Home></Home>
    }
    </>
  )
}

export default App
