import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import {HomePage} from './HomePage'
import {Habits} from './Habits'
import {Archived} from './Archive'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <nav>
          <NavLink to="/"> Home</NavLink>
          
          <NavLink to="/archived">
            Archived Habits
          </NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habit/:habitId" element={<Habits />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>
        </div>


    </>
  )
}

export default App
