import React from 'react'
import './Header.css'
import notifyicon from '../../images/Header/notifyicon.png'
import avi from '../../images/Header/avi.png'

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
          <div style={{textAlign: 'right', fontSize: '0.7rem'}}>Hello</div>
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
