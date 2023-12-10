import React from 'react'
import './Button.css'

function Button({href, text}) {
  return (
    <a href={href} id='landing-button-text'>{text}</a>
  )
}

export default Button