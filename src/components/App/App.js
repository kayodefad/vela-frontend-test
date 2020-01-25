import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="BodyContainer">
        <div className="sidebar"><SideBar /></div>
        <div className="main"><Main /></div>
      </div>
    </div>
  )
}

export default App
