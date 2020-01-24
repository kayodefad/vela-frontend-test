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
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

export default App
