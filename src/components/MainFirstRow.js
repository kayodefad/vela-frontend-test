import React from 'react'
import dailytransactionvol from '../images/BodyFirstLayer/dailytransactionvol.png'
import DailyTransactionValue from '../images/BodyFirstLayer/DailyTransactionValue.png'
import TotalTransVol from '../images/BodyFirstLayer/TotalTransVol.png'
import TotalTransVal from '../images/BodyFirstLayer/TotalTransVal.png'

const MainFirstRow = () => {
  return (
    <div>
      <img src={dailytransactionvol} alt={dailytransactionvol} />
      <img src={DailyTransactionValue} alt={DailyTransactionValue} />
      <img src={TotalTransVol} alt={TotalTransVol} />
      <img src={TotalTransVal} alt={TotalTransVal} />
    </div>
  )
}

export default MainFirstRow
