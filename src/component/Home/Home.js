import React from 'react'
import './Home.css'

import Navbar from '../Navbar/Navbar'
import Opening from '../Opening/Opening'
import Acts from '../Acts/Acts'
import Escalation from '../Escalation/Escalation'
import FirstRedScare from '../FirstRedScare/FirstRedScare'
import Workcited from '../Workcited/Workcited'
import Conclusion from '../Conclusion/Conclusion'

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='section-containers'>
        <Opening />
        <Acts />
        <Escalation />
        <FirstRedScare />
        <Conclusion />
        <Workcited />
      </div>
    </div>
  )
}

export default Home