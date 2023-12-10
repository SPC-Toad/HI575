import React from 'react'
import './ArtifactDes.css'
import ReactPlayer from 'react-player'

function ArtifactVid({video, title, description, citation}) {
  return (
    <div className='video-artifact-container'>
        <div className='artifact-title'>{title}</div>
        <ReactPlayer url={video} controls={true} width={'100%'} height={'auto'}/>
        <div className='video-citation-text'>{citation}</div>
        <p className='artifact-description'>{description}</p>
  </div>
  )
}

export default ArtifactVid