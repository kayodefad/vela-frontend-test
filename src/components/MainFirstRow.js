import React from 'react'
import dailytransactionvol from '../images/BodyFirstLayer/dailytransactionvol.png'
import DailyTransactionValue from '../images/BodyFirstLayer/DailyTransactionValue.png'
import TotalTransVol from '../images/BodyFirstLayer/TotalTransVol.png'
import TotalTransVal from '../images/BodyFirstLayer/TotalTransVal.png'
import './MainFirstRow.css'

const MainFirstRow = () => {
  return (
    <div className="MainFirstRow">
      <div className="value">
        <img style={{marginRight:'5px'}} src={dailytransactionvol} alt={dailytransactionvol} />
        <img src={DailyTransactionValue} alt={DailyTransactionValue} />
      </div>
      <div className="volume">
        <img style={{marginRight:'5px'}} src={TotalTransVol} alt={TotalTransVol} />
        <img src={TotalTransVal} alt={TotalTransVal} />
      </div>
    </div>
  )
}

export default MainFirstRow
