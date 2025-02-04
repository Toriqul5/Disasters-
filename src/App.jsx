import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from './component/navbar'
import { ChatBox } from './component/card'
import {Dashboard} from './component/dashboard'
import { Hero } from './component/Hero'
import { Incidents } from './component/incident'
import { LetsGet } from './component/home/letsget'
import { DesCribe } from './component/home/describe'
import { NewIncident } from './component/home/newincedient'
import { LetsGive } from './component/Letsgive'
import { Map } from './component/home/Map'
import { Location } from './component/home/Location '




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Incidents' element={<Incidents/> }/>
      <Route path='/Location' element={<Location/>  }/>
      <Route path='/LetsGet' element={<LetsGet/> }/>
      <Route path='/DesCribe' element={ <DesCribe/>}/>
      <Route path='/LetsGive' element={<LetsGive/> }/>
      <Route path='/Map' element={<Map/> }/>


    </Routes>
    </BrowserRouter>


    {/* <Hero/>  */}
    {/* <NewIncident/>  */}
    
    
    
    
   
    </>
  )
}

export default App
