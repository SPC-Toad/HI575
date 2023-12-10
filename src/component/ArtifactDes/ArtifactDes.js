import React from 'react'
import './ArtifactDes.css'

function ArtifactDes({image, title, description, citation}) {
  return (
    <div className='artifact-container'>
      <div className='artifact-lhs'>
        <img src={image} alt='' className='artifact-image'/>
        <div className='citation-text'>{citation}</div>
      </div>
      <div className='artifact-rhs'>
        <div className='artifact-title'>{title}</div>
        <p className='artifact-description'>{description}</p>
      </div>
    </div>
  )
}

export default ArtifactDes