import React from 'react'
import './MainSecondRow.css'
import green from '../../images/BodySecondLayer/SecondLayerRight/green.png'
import yellow from '../../images/BodySecondLayer/SecondLayerRight/yellow.png'

const MainSecondRow = () => {
  return (
    <div className="MainSecondRow">
      <div className="leftbar">
        <div className="Daterow">
          <h3 style={{ fontWeight: '0.7rem' }}>Today: 5, Aug 2018</h3>
          <div className="custom-select">
            <select className="select-date">
              <option value="0">1 Jan - 1 Jun</option>
              <option value="1">1 Jul - 1 Dec</option>
              <option value="2">1 Jan - 1 Jun</option>
            </select>
          </div>
          <div className="arrows">
            <i
              style={{ marginRight: '10px' }}
              className="fas fa-chevron-left"
            ></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="biggraph">
          {/* <div className="months"> */}
          <span style={{ position: 'absolute', left: '22px' }}>Jan</span>
          <span style={{ position: 'absolute', left: '147px' }}>Feb</span>
          <span style={{ position: 'absolute', left: '260px' }}>Mar</span>
          <span style={{ position: 'absolute', left: '378px' }}>Apr</span>
          <span style={{ position: 'absolute', left: '495px' }}>May</span>
          <span style={{ position: 'absolute', left: '615px' }}>Jun</span>
          {/* </div> */}
        </div>
      </div>
      <div className="rightbar">
        <div className="topandbottom">
          <div className="top">
            <h3>Orders</h3>
            <div>
              <img src={green} alt="green" style={{ width: '70%' }} />
              <img src={yellow} alt="yellow" />
            </div>
            <p>
              Pending Orders:{' '}
              <span style={{ color: 'yellow', fontWeight: 'bold' }}>20</span>
            </p>
            <p>
              Reconciled Orders:{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>80</span>
            </p>
            <p>
              Total Orders:{' '}
              <span style={{ color: 'blue', fontWeight: 'bold' }}>100</span>
            </p>
          </div>
          <div className="bottom">
            <h3>Payments</h3>
            <div>
              <img src={green} alt="green" style={{ width: '70%' }} />
              <img src={yellow} alt="yellow" />
            </div>
            <p>
              Un-reconciled:{' '}
              <span style={{ color: 'yellow', fontWeight: 'bold' }}>20</span>
            </p>
            <p>
              Reconciled Orders:{' '}
              <span style={{ color: 'green', fontWeight: 'bold' }}>80</span>
            </p>
            <p>
              Total Orders:{' '}
              <span style={{ color: 'blue', fontWeight: 'bold' }}>100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSecondRow
