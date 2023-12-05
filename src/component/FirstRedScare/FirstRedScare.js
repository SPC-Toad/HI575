import React from 'react'
import ReactPlayer from 'react-player'
import './FirstRedScare.css'

import ArtifactDes from '../ArtifactDes/ArtifactDes'

import deportation from '../Assets/deportation.png'

import Raid from '../Assets/Raid.mp4'

function FirstRedScare() {
  return (
    <div className='first-red-scare-container' id='First_Red_Scare'>
      <div className='first-red-scare-video-container'>
      <ReactPlayer url={Raid} controls={true} className='first-red-scare-video'/>
        <div className='artifact-rhs'>
            <div className='artifact-title'>The Palmer Raids | The Bombing of Wall Street</div>
            <p className='artifact-desc'>The Palmer Raids, conducted in November 1919 and January 1920, were a series of government actions aimed at arresting and deporting individuals suspected of radical activities against the U.S. government. High-profile figures such as Emma Goldman, along with numerous communist sympathizers and activists, were arrested during these raids. These actions, a direct response to the perceived threat of communism and radicalism, underscore the U.S. government’s efforts to neutralize threats to American identity and ideology, as discussed in the introduction. The Palmer Raids serve as an example of how the fear and tension of the First Red Scare led to significant shifts in government policies and societal norms.</p>
        </div>
      </div>
      <ArtifactDes 
        image={deportation}
        title={'Missent'}
        description={'As the Palmer Raids unfolded, it became evident that many of those arrested were not affiliated with any radical organization. In fact, some were American citizens who were arrested without warrants. This led to a significant backlash against the violations of civil liberties. The figure illustrates the deportation process, revealing the targets of these actions. While these measures did mitigate the perceived threat to American ideology and public safety, they also resulted in the removal of falsely accused individuals from the U.S. This underscores the complex and far-reaching impacts of the First Red Scare on both government policies and societal norms. It also highlights the tension between the value of national security and individual rights.'}
      />
    </div>
  )
}

export default FirstRedScare