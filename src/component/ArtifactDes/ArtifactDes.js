import React from 'react'
import './ArtifactDes.css'

function ArtifactDes({image, title, description}) {
  return (
    <div className='artifact-container'>
        <img src={image} alt='' className='artifact-image'/>
        <div className='artifact-rhs'>
            <div className='artifact-title'>{title}</div>
            <p className='artifact-desc'>{description}</p>
        </div>
    </div>
  )
}

export default ArtifactDes