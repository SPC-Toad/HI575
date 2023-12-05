import React from 'react'
import './Escalation.css'


import ArtifactDes from '../ArtifactDes/ArtifactDes'

import chaos from '../Assets/chaos.png';
import newspaper from '../Assets/newspaper.jpg';
import meltingpot from '../Assets/meltingpot.png';

function Escalation() {
  return (
    <div className='Escalation-container' id='Escalating_Threat'>
      <ArtifactDes 
        image={chaos}
        title={'Chaos cartoon'}
        description={'Development of communism instilled fear in the U.S. government, which was concerned that American society might descend into chaos due to communist infiltrators. The figure illustrates this fear, depicting the U.S. government’s apprehension about the potential disruption of American ideology and order.'}
      />
      <ArtifactDes 
        image={newspaper}
        title={'1919 Wall Street Bombing'}
        description={'The bombings of April 30, 1919, represent a tangible manifestation of the perceived threat to American society and capitalism. The fear and social unrest that followed these bombings led to more dramatic actions from the public and the government, further escalating the tension and fear that characterized the First Red Scare.'}
      />
      <ArtifactDes 
        image={meltingpot}
        title={'The Worlds Melting Pot'}
        description={'The figure presents a visual metaphor of the U.S. government’s concern over the rapidly growing global threats that could potentially disrupt American ideology. This ‘melting pot’ is depicted as being unable to ‘digest’ certain elements, representing the perceived threats to American society. Aligning with the government’s efforts to neutralize threats to American identity and ideology during this period. The figure underscores the tension between the ideal of the ‘melting pot’ and the reality of societal fear and government action during the First Red Scare.'}
      />
    </div>
  )
}

export default Escalation