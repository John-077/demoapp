import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import AddEmployee from './Pages/AddEmployee'
import Login from './Pages/Login'
import { Route, Routes as Routees } from 'react-router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Routees>
         <Route path="/" element={<Home />} />
         <Route path="/add-employee" element={<AddEmployee />} />
         <Route path="/login" element={<Login />} />

       </Routees>
      </div>
      
    </>
  )
}

export default App
