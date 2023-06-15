import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home"
import Home from "./Pages/Enfermedad"
import Home from "./Pages/MyAccount"
import Home from "./Pages/Sign in"
import { useRoutes } from 'react-router-dom'

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: "/Home", element: <Home/>},
    {path: "/Enfermedad", element: <Enfermedad/>},
    {path: "/MyAccount", element: <MyAccount/>},
    {path: "/Sign in", element: <Sign in/>},




  ])
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
   ,<div>
    <ul className='sections'>
      <li>Inicio</li>
      <li>Enfermedades</li>
      <li>Puntos focales</li>
      <li>Plan Estrategico</li>
    </ul>
  <div className='inicio-container'>
    <p className='Descripcion-Inicio'>La salud humana ha sido determinada por diversos factores, entre los que se encuentran la relacion de los seres humanos
      con los animales que determina la forma de adaptarnos al enterno que habitamos con los animales, nuestros leales compañeros.
      Asi nace esta iniciatiba, para educar nuestra relacion en el ambito de la salud con los animales.
    </p>
    </div>
  </div>
    
    </>
  )
}

export default App
