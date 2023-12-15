import React from 'react'
import ArtifactDes from '../ArtifactDes/ArtifactDes'

import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Espionage1917 from '../Assets/Espionage1917.png'
import spies from '../Assets/spies.jpg'
import congress from '../Assets/congress.jpeg'

function Acts() {
  return (
    <div className='container'>
      <Navbar />
      <div className='content-title'>Acts & Laws</div>
      <div className='content'>
        <ArtifactDes 
          image={congress}
          title={'Espionage and Sedition Act'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The following laws were passed from the U.S. government during World War I: The Espionage Act of 1917, and The Sedition Act of 1918. The Espionage Act of 1917 prohibits interference with the US armed forces during a war or assisting the nation’s enemies. The Sedition Act of 1918 criminalized speech that incited resistance to the war effort or criticized the US government, strengthening the Espionage Act of 1917 by censor and arrest of disloyal individuals.</p>}
          citation={"Jones, Eric. 2021. Military Power and Congress. Stennis Center for Public Serive. https://stennis.gov/new-brief-military-power-and-congress/."}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={spies}
          title={'Dont Talk, Spies Are Listening'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This artifact is a propaganda poster from 1918, during World War I, titled ‘Don’t talk, the web is spun for you with invisible threads, keep out of it, help to destroy it–spies are listening’. The poster was part of the U.S. government’s efforts to prevent the leakage of military intelligence that could potentially aid Germany. It features an eerie representation of Kaiser Wilhelm II, the leader of Germany, as a warning to audiences to self-censor and avoid inadvertently sharing military intelligence. This poster reflects the U.S. government’s heightened vigilance since 1917 to protect American society and ideology from foreign influences by heavily restricting any expression about the military. Similar levels, if not greater levels, of fear and vigilance were evident during the First Red Scare as the nation strived to maintain its national security.</p>}
          citation={"Don't Talk, the Web Is Spun for You With Invisible Threads, Keep Out of It, Help to Destroy It--Spies Are Listening. United States, 1918. [Boston: Walker Lith. & Pub. Co., ?] Photograph. https://www.loc.gov/item/93515950/.'"}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={Espionage1917}
          title={'Now For A Round-Up'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The cartoon from 1918 by William Allen Rogers depicts the U.S. government targeting “traitors”, “spies”, “Industrial Workers of the World (IWW)”, anarchists, and foreign and domestic enemies. By establishing the Espionage Act of 1917 and the Sedition Act of 1918, the U.S. government filtered out any threat to the government and nation to punish them lawfully. Since the developmental stages of the First Red Scare, the U.S. government was aware of rise of national threat and did not take any threat on American ideology lightly.</p>}
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