import { useState } from 'react'

import './App.css'
import { Home } from './components/home'



function App() {
  let [count, setCount] = useState(0)

  const handleView = (e)=>{
   
    setCount(count + 1)
    console.log(count)
  }
  return (
    
    <>
      <button onClick={handleView}>
        {count}
      </button>
    {
      count == 1 &&  <Home></Home>
    }
    </>
  )
}

export default App
