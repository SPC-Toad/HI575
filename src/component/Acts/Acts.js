import React from 'react'
import ArtifactDes from '../ArtifactDes/ArtifactDes'
import './Acts.css'

import Espionage1917 from '../Assets/Espionage1917.png'

function Acts() {
  return (
    <div className='acts-container' id='Acts'>
      <ArtifactDes 
        image={Espionage1917}
        title={'Acts and Laws'}
        description={'The following laws were passed from the US government during WWI: The Espionage Act of 1917 and The Sedition Act of 1918. The Espionage Act of 1917 prohibits interference with the US armed forces during a war or assisting the nation’s enemies. The Sedition Act of 1918 criminalized speech that incited resistance to the war effort or criticized the US government. The cartoon from 1918 by William Allen Rogers depicts the US government targeting “traitors”, “spies”, “Industrial Workers of the World (IWW)”, anarchists, and foreign enemies. By establishing the Espionage Act of 1917 and the Sedition Act of 1918, the US government filtered out any threat from the country and the government.'}
      />
    </div>
  )
}

export default Acts