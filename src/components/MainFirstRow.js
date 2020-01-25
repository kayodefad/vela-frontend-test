import React from 'react'
import smallgraph from '../images/BodyFirstLayer/smallgraph.png'
import './MainFirstRow.css'

const MainFirstRow = () => {
  return (
    <div className="MainFirstRow">
      <div className="left">
        <div className="dailyvol">
          <div className="dailytransvol">
            <div>Daily Transaction Volume</div>
            <div>2,342</div>
          </div>
          <div>
            <img src={smallgraph} alt="small graph" />
          </div>
        </div>
        <div className="dailyval">
          <div className="dailytransval">
            <div>Daily Transaction Value</div>
            <div>4,000,000</div>
          </div>
          <div>
            <img src={smallgraph} alt="small graph" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="totalvol">
          <div className="totaltransvol">
            <div>Total Transaction Volume</div>
            <div>452,000</div>
          </div>
          <div>
            <img src={smallgraph} alt="small graph" />
          </div>
        </div>
        <div className="totalval">
          <div className="totaltransval">
            <div>Total Transaction Value</div>
            <div>4,000,000</div>
          </div>
          <div>
            <img src={smallgraph} alt="small graph" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFirstRow
