import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './component/Landing/Landing.js'
import Opening from './component/Opening/Opening.js'
import Acts from './component/Acts/Acts'
import Escalation from './component/Escalation/Escalation'
import FirstRedScare from './component/FirstRedScare/FirstRedScare'
import Conclusion from './component/Conclusion/Conclusion'
import Workcited from './component/Workcited/Workcited'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/introduction' element={ <Opening /> } />
          <Route path='/acts' element={ <Acts /> } />
          <Route path='/escalation' element={ <Escalation /> } />
          <Route path='/first_red_scare' element={ <FirstRedScare /> } />
          <Route path='/conclusion' element={ <Conclusion /> } />
          <Route path='/workcited' element={ <Workcited /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App