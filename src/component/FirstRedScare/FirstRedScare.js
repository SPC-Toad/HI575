import React from 'react'

import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

import ArtifactDes from '../ArtifactDes/ArtifactDes'

import deportation from '../Assets/deportation.png'

import Raid from '../Assets/Raid.mp4'
import ArtifactVid from '../ArtifactDes/ArtifactVid';

function FirstRedScare() {
  return (
    <div className='container'>
      <Navbar />
      <div className='content-title'>The First Red Scare</div>
      <div className='content'>
        <ArtifactVid 
          video={Raid}
          title={'The Palmer Raids | The Bombing of Wall Street'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Palmer Raids, conducted in November 1919 and January 1920, were a series of government actions aimed at arresting and deporting individuals suspected of radical activities against the U.S. government. High-profile figures such as Emma Goldman, along with numerous communist sympathizers and activists, were arrested during these raids. These actions, a direct response to the perceived threat of communism and radicalism, underscore the U.S. government’s efforts to neutralize threats to American identity and ideology, as discussed in the introduction. The Palmer Raids serve as an example of how the fear and tension of the First Red Scare led to significant shifts in government policies and societal norms.</p>}
          citation={'“The Palmer Raids | the Bombing of Wall Street.” 2018. Www.youtube.com. February 14, 2018. https://www.youtube.com/watch?v=zvFZmBJNZUc&ab_channel=AmericanExperience%7CPBS.'}
        />
        <div className='spacer'/>
        <ArtifactDes 
          image={deportation}
          title={'Deportation and Objective Secure'}
          description={<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the Palmer Raids unfolded, it became evident that many of those arrested were not affiliated with any radical organization. In fact, some were American citizens who were arrested without warrants. This led to a significant backlash against the violations of civil liberties. The figure illustrates the deportation process, revealing the targets of these actions. While these measures did mitigate the perceived threat to American ideology and public safety, they also resulted in the removal of falsely accused individuals from the U.S. This underscores the complex and far-reaching impacts of the First Red Scare on both government policies and societal norms. It also highlights the tension between the value of national security and individual rights.</p>}
          citation={'“Missent | History Teaching Institute.” n.d. Hti.osu.edu. https://hti.osu.edu/opper/lesson-plans/the-red-scare/images/missent.'}
        />
      </div>
      <Button 
        href='./conclusion'
        text='Conclusion &#8594;'
      />
    </div>
  )
}

export default FirstRedScare