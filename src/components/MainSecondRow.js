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

const MainSecondRow = () => {
  return (
    <div className="MainSecondLayer">
      <div className="topofgraph">
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
      </div>
    </div>
  )
}

export default MainSecondRow