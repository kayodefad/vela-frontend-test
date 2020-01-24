import React from 'react'
import './MainSecondRow.css'
import Jan2018 from '../images/BodySecondLayer/SecondLayerLeft/Jan2018.png'
import Apr from '../images/BodySecondLayer/SecondLayerLeft/Apr.png'
import biggrapgh from '../images/BodySecondLayer/SecondLayerLeft/biggrapgh.png'
import Feb from '../images/BodySecondLayer/SecondLayerLeft/Feb.png'
import Jan from '../images/BodySecondLayer/SecondLayerLeft/Jan.png'
import jan2june from '../images/BodySecondLayer/SecondLayerLeft/jan2june.png'
import Jun from '../images/BodySecondLayer/SecondLayerLeft/Jun.png'
import LeftButton from '../images/BodySecondLayer/SecondLayerLeft/LeftButton.png'
import leftArrow from '../images/BodySecondLayer/SecondLayerLeft/leftArrow.png'
import Mar from '../images/BodySecondLayer/SecondLayerLeft/Mar.png'
import May from '../images/BodySecondLayer/SecondLayerLeft/May.png'
import rightArrow from '../images/BodySecondLayer/SecondLayerLeft/rightArrow.png'
import RightButton from '../images/BodySecondLayer/SecondLayerLeft/RightButton.png'
import secondLayerRectangle from '../images/BodySecondLayer/SecondLayerLeft/secondLayerRectangle.png'
import green from '../images/BodySecondLayer/SecondLayerRight/green.png'
import yellow from '../images/BodySecondLayer/SecondLayerRight/yellow.png'

const MainSecondRow = () => {
  const style = {
    background: '#fff',
    padding: '2px 7px',
    border: '#bdbaba',
    borderRadius: '5px'
  }
  return (
    <div className="MainSecondRow">
      {/* <div className="topofgraph">
        <img className="today" src={Jan2018} alt="Jan2018" />
        <img src={jan2june} alt="jan2june" />
        <div className="arrows">
          <img
            style={{ marginRight: '13px' }}
            className="leftArrow"
            src={leftArrow}
            alt="leftArrow"
          />
          <img className="rightArrow" src={rightArrow} alt="rightArrow" />
        </div>
      </div>
      <div className="biggraph">
        <img src={Jan} alt="Jan" />
        <img src={Feb} alt="Feb" />
        <img src={Mar} alt="Mar" />
        <img src={Apr} alt="Apr" />
        <img src={May} alt="May" />
        <img src={Jun} alt="Jun" />
      </div> */}
      <div className="leftbar">
        <div>
          <h3>Today: 5, Aug 2018</h3>
          <div class="custom-select">
            <select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
            </select>
          </div>
          <div>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="rightbar">
        <div className="topandbottom">
          <div className="top">
            <h3>Orders</h3>
            <div>
              <img src={green} alt="green" />
              <img src={yellow} alt="yellow" />
            </div>
            <p>Pending Orders: 20</p>
            <p>Reconciled Orders: 80</p>
            <p>Total Orders: 100</p>
          </div>
          <div className="bottom">
            <h3>Payments</h3>
            <div>
              <img src={green} alt="green" />
              <img src={yellow} alt="yellow" />
            </div>
            <p>Un-reconciled: 20</p>
            <p>Reconciled Orders: 80</p>
            <p>Total Orders: 100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSecondRow
