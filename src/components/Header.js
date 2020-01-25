import React from 'react'
import './Header.css'
import notifyicon from '../images/Header/notifyicon.png'
import avi from '../images/Header/avi.png'

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">TransMonitor</div>
      <div className="search">
        <input type="search" placeholder="Search" />
      </div>
      <div className="support">Support</div>
      <div className="faq">FAQ</div>
      <div className="image">
        <img src={notifyicon} alt="notification" />
      </div>
      <div className="details">
        <div className="info"><div>
          <small style={{textAlign:'right'}}>Hello</small>
          <div>Oluwaleke Ojo</div>
        </div>
        <div className="avi">
          <img src={avi} alt="avi" />
        </div></div>
      </div>
    </div>
  )
}

export default Header
