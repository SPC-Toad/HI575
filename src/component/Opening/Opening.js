import React from 'react'
import './Opening.css'
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button';

function Opening() {
  return (
    <div className='opening-container' id='Intro'>
      <Navbar />
      <div className='opening-content'>
        <div className='opening-title'>Introduction</div>
        <p className='opening-paragraph'>
          &nbsp;&nbsp;&nbsp;&nbsp;This exhibition provides an in-depth exploration of the First Red Scare, a chaotic and fiercened period marked by fear, policy-making, and societal change in response to perceived threats. In the aftermath of World War I, the demand for war assets plummeted, leading to strikes, riots, and economic hardship. Racial tensions escalated concurrently, further straining the societal fabric. 
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;The Bolshevik Revolution of 1917 in Russia, which marked the rise of communism, coupled with a series of chaotic incidents both globally and nationally, culminated in the 1919 Wall Street bombing. This event served as the catalyst for the United States’ affirmative action against perceived national threats.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;In the midst of this chaos, the United States grappled with the First Red Scare, a significant period that profoundly shaped American society, government policies, and public ideology. This exhibition delves into the societal changes, shifts in government policies, and transformation in public ideology that occurred during this period.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;The fear and tension that characterized the First Red Scare led to significant shifts in government policies, as evidenced by the Espionage Act of 1917, the Sedition Act of 1918, and the Palmer Raids. These actions, driven by the perceived threat of communism and radicalism, emphasized the U.S. government’s efforts to neutralize threats to American identity and ideology. However, these measures also led to violations of civil liberties, highlighting the tension between national security and individual rights.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;This exhibition aims to shed light on the long-lasting impact of the First Red Scare on American society and the precedent it set for future periods of fear and suspicion.
        </p>
      </div>
      <Button 
        href='./acts'
        text='Acts & Laws &#8594;'
      />
    </div>
  )
}

export default Opening