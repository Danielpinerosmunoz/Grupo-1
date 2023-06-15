
import './App.css'
import Begining from "./Pages/Begining"
import Enfermedad from "./Pages/Enfermedad"
import MyAccount from "./Pages/MyAccount"
import Signin from "./Pages/Signin"
import { BrowserRouter, useRoutes } from 'react-router-dom'


const AppRoutes = () => {
  let routes = useRoutes ([
    {path: "/", element: <Begining/>},
    {path: "/Begining", element: <Begining/>},
    {path: "/Enfermedad", element: <Enfermedad/>},
    {path: "/MyAccount", element: <MyAccount/>},
    {path: "/Signin", element: <Signin/>},

  ])
  return routes
}
<div>
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

const App = () => {
  return ( 
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
