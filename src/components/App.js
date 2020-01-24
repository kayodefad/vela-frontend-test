import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="BodyContainer">
        <div className="sidebar" style={{background: 'red'}}><SideBar /></div>
        <div className="main" style={{background: 'yellow'}}><Main /></div>
      </div>
    </div>
  )
}

export default App
