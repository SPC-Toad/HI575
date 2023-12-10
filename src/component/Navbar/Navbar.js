import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <a href='./introduction' id='section-item'>Introduction</a>
      <a href='./acts' id='section-item'>Acts & Laws</a>
      <a href='./escalation' id='section-item'>Escalating Threat</a>
      <a href='./first_red_scare' id='section-item'>The First Red Scare</a>
      <a href='./conclusion' id='section-item'>Conclusion</a>
      <a href='./workcited' id='section-item'>WorkCited</a>
    </div>
  )
}

export default Navbar