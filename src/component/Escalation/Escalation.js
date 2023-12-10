import React from 'react'
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

import ArtifactDes from '../ArtifactDes/ArtifactDes'

import chaos from '../Assets/chaos.png';
import newspaper from '../Assets/newspaper.jpg';
import meltingpot from '../Assets/meltingpot.png';

function Escalation() {
  return (
    <div className='container'>
      <Navbar />
      <div className='content-title'>Escalating Threat</div>
      <div className='content'>
        <ArtifactDes 
          image={chaos}
          title={'Chaos cartoon'}
          description={'Development of communism instilled fear in the U.S. government, which was concerned that American society might descend into chaos due to communist infiltrators. The figure illustrates this fear, depicting the U.S. government’s apprehension about the potential disruption of American ideology and order.'}
          citation={'‌“U.S. History, Americans and the Great War, 1914-1919, Demobilization and Its Difficult Aftermath.” n.d. OpenEd CUNY. Accessed December 1, 2023. https://opened.cuny.edu/courseware/lesson/430/student/?section=2.'}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={newspaper}
          title={'1919 Wall Street Bombing'}
          description={'The bombings of April 30, 1919, represent a tangible manifestation of the perceived threat to American society and capitalism. The fear and social unrest that followed these bombings led to more dramatic actions from the public and the government, further escalating the tension and fear that characterized the First Red Scare.'}
          citation={'Humanities, National Endowment for the. 1919. “New-York Tribune. [Volume] (New York [N.Y.]) 1866-1924, June 04, 1919, Image 1.” Chroniclingamerica.loc.gov, June 4, 1919. https://chroniclingamerica.loc.gov/lccn/sn83030214/1919-06-04/ed-1/seq-1/.'}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={meltingpot}
          title={'The Worlds Melting Pot'}
          description={'The figure presents a visual metaphor of the U.S. government’s concern over the rapidly growing global threats that could potentially disrupt American ideology. This ‘melting pot’ is depicted as being unable to ‘digest’ certain elements, representing the perceived threats to American society. Aligning with the government’s efforts to neutralize threats to American identity and ideology during this period. The figure underscores the tension between the ideal of the ‘melting pot’ and the reality of societal fear and government action during the First Red Scare.'}
          citation={'“We Can’t Digest the Scum | History Teaching Institute.” 2000. Osu.edu. 2000. https://hti.osu.edu/opper/lesson-plans/the-red-scare/images/we-cant-digest-the-scum.'}
        />
      </div>
      <Button 
        href='./first_red_scare'
        text='The First Red Scare &#8594;'
      />
    </div>
  )
}

export default Escalation