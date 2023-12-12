import React from 'react'
import ArtifactDes from '../ArtifactDes/ArtifactDes'

import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Espionage1917 from '../Assets/Espionage1917.png'

function Acts() {
  return (
    <div className='container'>
      <Navbar />
      <div className='content-title'>Acts & Laws</div>
      <div className='content'>
        <ArtifactDes 
          image={Espionage1917}
          title={'Espionage and Sedition Act'}
          description={'The following laws were passed from the US government during WWI: The Espionage Act of 1917 and The Sedition Act of 1918. The Espionage Act of 1917 prohibits interference with the US armed forces during a war or assisting the nation’s enemies. The Sedition Act of 1918 criminalized speech that incited resistance to the war effort or criticized the US government. The cartoon from 1918 by William Allen Rogers depicts the US government targeting “traitors”, “spies”, “Industrial Workers of the World (IWW)”, anarchists, and foreign enemies. By establishing the Espionage Act of 1917 and the Sedition Act of 1918, the US government filtered out any threat from the country and the government.'}
          citation={'“Now for a Round-up / W.A. Rogers.” n.d. Library of Congress, Washington, D.C. 20540 USA. Accessed December 1, 2023. https://www.loc.gov/item/2010717793.'}
        />
      </div>
      <Button 
        href='./escalation'
        text='Escalating Threat &#8594;'
      />
    </div>
  )
}

export default Acts