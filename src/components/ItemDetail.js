import React from 'react'
import './ItemDetail.css'
import vwsymbol from '../images/BodyTable/vwsymbol.png'
import pendcirc from '../images/BodyTable/pendcirc.png'
import reconicon from '../images/BodyTable/reconicon.png'
import unreconcirc from '../images/BodyTable/unreconcirc.png'

const ItemDetail = ({ itemType, price, transNo, time, status }) => {
  let statusIcon

  if (status === 'Reconciled') {
    statusIcon = reconicon
  } else if (statusIcon === 'Pending') {
    statusIcon = pendcirc
  } else {
    statusIcon = unreconcirc
  }

  return (
    <div className="ItemDetail">
      <tr>
        <td className="prac">
          <img src={vwsymbol} alt="vwsymbol" />
          <span>{itemType}</span>
        </td>
        <td>{price}</td>
        <td>{transNo}</td>
        <td>{time}</td>
        <td>
          <span className="recon">
            <img src={statusIcon} alt="status icon" /> <span>{status}</span>
          </span>
        </td>
        <td>
          <i className="fas fa-chevron-down"></i>
        </td>
      </tr>
    </div>
  )
}

export default ItemDetail
