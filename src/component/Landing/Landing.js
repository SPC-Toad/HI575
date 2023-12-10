import React from 'react'
import './Landing.css'

import landing_img from '../Assets/is_this_tommorrow.jpg'
import Button from '../Button/Button'

function Landing() {
  return (
    <div className='landing-container'>
        <div className='landing-text-container'>
            <div id='landing-title-text'>The First Red Scare</div>
            <div id='landing-desc-text'>Dive into the history and ramifications of the First Red Scare, a period of political tension and conflict in the United States.,</div>
            <Button 
              href='./introduction'
              text='Find out more here &#8594;'
            />
        </div>
        <img src={landing_img} alt='err' id='landing-img'/> 
    </div>
  )
}

export default Landing