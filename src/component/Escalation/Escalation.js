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
          title={'Steps to Uncertainty'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first stair represents the aftermath of World War I, marked by one of the largest labor strikes in the country. Leaving unemployed individuals adrift. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Second stair portrays the riots and racial attacks that swept Chicago when some laborers discovered their jobs had been taken by people of color, which fueled the riots even more. The unemployment of police officers further facilitated looting until state guards intervened to quell the riots. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Third stair depicts the development of communism, which instilled fear in the U.S. government and public. There was concern that American society might descend into chaos due to communist infiltrators, as evidenced by events like the 1919 Wall Street bombing and attempted assassinations of government officials. <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ultimately the question mark illustrates this fear, symbolizing the U.S. government’s apprehension about the potential disruption of American ideology and order. This figure encapsulates the fear that the US government had for the ‘next step’ in the midst of consecutive chaotic events.</p>}
          citation={'Greene, Sidney. 1919. Review of Step by Step Greene. Wikimedia Commons. New York Evening Telegram. November 1, 1919. https://commons.wikimedia.org/wiki/File:Step_by_step_greene.jpg.'}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={newspaper}
          title={'1919 Wall Street Bombing'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The bombings of April 30, 1919, represent a tangible manifestation of the perceived threat to American society and capitalism. The New York Tribune’s headline, “Nation-Wide Search for ‘Reds’ Begins,” rallied the public to unite in their efforts against radicals within the nation. The fear and social unrest that followed these bombings led to more dramatic actions from the public and the government, further escalating the tension and fear that characterized the First Red Scare.</p>}
          citation={'Humanities, National Endowment for the. 1919. “New-York Tribune. [Volume] (New York [N.Y.]) 1866-1924, June 04, 1919, Image 1.” Chroniclingamerica.loc.gov, June 4, 1919. https://chroniclingamerica.loc.gov/lccn/sn83030214/1919-06-04/ed-1/seq-1/.'}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={meltingpot}
          title={'The Worlds Melting Pot'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The figure presents a visual metaphor of the U.S. government’s concern over the rapidly growing global threats that could potentially disrupt American ideology. This ‘melting pot’ is depicted as being unable to ‘digest’ certain elements, representing the perceived threats to American society. Aligning with the government’s efforts to neutralize threats to American identity and ideology during this period. The figure underscores the tension between the unwelcomed ideals of the ‘melting pot’ and the reality of societal fear and government's "corrective" action before the First Red Scare.</p>}
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