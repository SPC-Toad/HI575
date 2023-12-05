import React from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <Link id='section-item' to="Intro" spy={true} smooth={true} offset={0} duration={1000}>Introduction</Link>
      <Link id='section-item' to="Acts" spy={true} smooth={true} offset={0} duration={1000}>Acts & Laws</Link>
      <Link id='section-item' to="Escalating_Threat" spy={true} smooth={true} offset={-100} duration={1000}>Escalating Threat</Link>
      <Link id='section-item' to="First_Red_Scare" spy={true} smooth={true} offset={0} duration={1000}>The First Red Scare</Link>
      <Link id='section-item' to="Conclusion" spy={true} smooth={true} offset={0} duration={1000}>Conclusion</Link>
      <Link id='section-item' to="WorkCited" spy={true} smooth={true} offset={0} duration={1000}>WorkCited</Link>
    </div>
  )
}

export default Navbar