import { BrowserRouter, Routes, Route } from 'react-router-dom'

//componentes---------------------------------------------------------------------------------------------------------------------------------------------
import {Nav} from './componentes/Nav'
import { Footer } from './componentes/Footer'
//componentes---------------------------------------------------------------------------------------------------------------------------------------------

//Paginas---------------------------------------------------------------------------------------------------------------------------------------------
import { Menu } from './paginas/Menu'
import { Inicio } from './paginas/Inicio'
import { Nosotros } from './paginas/Nosotros'
import { Contacto } from './paginas/Contacto'
import { Politica } from './paginas/Politica'
//Paginas---------------------------------------------------------------------------------------------------------------------------------------------

//CSS y JS---------------------------------------------------------------------------------------------------------------------------------------------
import './App.css'
import { Filtros } from './componentes/Filtros'
//CSS y JS---------------------------------------------------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
    <BrowserRouter>
     <Nav/>
      <Routes>
         <Route path='/' element={<Inicio/>}/>
         <Route path='/1' element={<Filtros/>}/>
         <Route path='/menu' element={<Menu/>}/>         
         <Route path='/nosotros' element={<Nosotros/>}/>
         <Route path='/contacto' element={<Contacto/>}/>
         <Route path='/politica' element={<Politica/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
