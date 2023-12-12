import React from 'react'
import './Workcited.css'
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

function Workcited() {
  return (
    <div className='opening-container'>
      <Navbar />
      <div className='opening-content'>
        <div className='opening-title'>Bibliography</div>
        <div className='content'>
          <p className='opening-paragraph'>
          “Now for a Round-up / W.A. Rogers.” n.d. Library of Congress, Washington, D.C. 20540 USA. Accessed December 1, 2023. https://www.loc.gov/item/2010717793.
          </p>
          <br />
          <p className='opening-paragraph'>
          Greene, Sidney. 1919. Review of Step by Step Greene. Wikimedia Commons. New York Evening Telegram. November 1, 1919. https://commons.wikimedia.org/wiki/File:Step_by_step_greene.jpg.
          </p>
          <br />
          <p className='opening-paragraph'>
            Humanities, National Endowment for the. 1919. “New-York Tribune. [Volume] (New York [N.Y.]) 1866-1924, June 04, 1919, Image 1.” Chroniclingamerica.loc.gov, June 4, 1919. https://chroniclingamerica.loc.gov/lccn/sn83030214/1919-06-04/ed-1/seq-1/.
          </p>
          <br />
          <p className='opening-paragraph'>
            “We Can’t Digest the Scum | History Teaching Institute.” 2000. Osu.edu. 2000. https://hti.osu.edu/opper/lesson-plans/the-red-scare/images/we-cant-digest-the-scum.
          </p>
          <br />
          <p className='opening-paragraph'>
            “The Palmer Raids | the Bombing of Wall Street.” 2018. Www.youtube.com. February 14, 2018. https://www.youtube.com/watch?v=zvFZmBJNZUc&ab_channel=AmericanExperience%7CPBS. 
          </p>
          <br />
          <p className='opening-paragraph'>
            “Missent | History Teaching Institute.” n.d. Hti.osu.edu. https://hti.osu.edu/opper/lesson-plans/the-red-scare/images/missent. 
          </p>
        </div>
        <div className='opening-title'>Reference</div>
        <div className='content'>
          <p className='opening-paragraph'>
          “Now for a Round-up / W.A. Rogers.” n.d. Library of Congress, Washington, D.C. 20540 USA. Accessed December 1, 2023. https://www.loc.gov/item/2010717793.
          </p>
          <br />
          <p className='opening-paragraph'>
          Greene, Sidney. 1919. Review of Step by Step Greene. Wikimedia Commons. New York Evening Telegram. November 1, 1919. https://commons.wikimedia.org/wiki/File:Step_by_step_greene.jpg.
          </p>
          <br />
          <p className='opening-paragraph'>
            Humanities, National Endowment for the. 1919. “New-York Tribune. [Volume] (New York [N.Y.]) 1866-1924, June 04, 1919, Image 1.” Chroniclingamerica.loc.gov, June 4, 1919. https://chroniclingamerica.loc.gov/lccn/sn83030214/1919-06-04/ed-1/seq-1/.
          </p>
          <br />
          <p className='opening-paragraph'>
            “We Can’t Digest the Scum | History Teaching Institute.” 2000. Osu.edu. 2000. https://hti.osu.edu/opper/lesson-plans/the-red-scare/images/we-cant-digest-the-scum.
          </p>
          <br />
          <p className='opening-paragraph'>
            “The Palmer Raids | the Bombing of Wall Street.” 2018. Www.youtube.com. February 14, 2018. https://www.youtube.com/watch?v=zvFZmBJNZUc&ab_channel=AmericanExperience%7CPBS. 
          </p>
          <br />
          <p className='opening-paragraph'>
            “Missent | History Teaching Institute.” n.d. Hti.osu.edu. https://hti.osu.edu/opper/lesson-plans/the-red-scare/images/missent. 
          </p>
        </div>
      </div>
      <Button 
        href='./'
        text='Back To Start &#8594;'
      />
    </div>
  )
}

export default Workcited