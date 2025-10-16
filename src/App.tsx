import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <div className = "flex justify-between m-10 content-center">
        <h1 className = "py-2 text-2xl content-center"> Grubhub </h1>
          <div className = "py-3 grid grid-flow-col gap-3">
            <Link to = "/" 
              className = "border-2 pt-1 pb-1 pl-4 pr-4 rounded-sm content-center"> Home </Link>
            <Link to = "/view-cart" 
              className = "border-2 pt-1 pb-1 pl-4 pr-4 rounded-sm content-center"> View Cart </Link>
          </div>
      </div>
      <Outlet key = {location.pathname}/>
    </>
  )
}

export default App
