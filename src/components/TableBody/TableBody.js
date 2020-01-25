import React from 'react'
import './TableBody.css'
import { itemsPurchased } from '../../itemsPurchased'
import vwsymbol from '../../images/BodyTable/vwsymbol.png'
import pendcirc from '../../images/BodyTable/pendcirc.png'
import reconicon from '../../images/BodyTable/reconicon.png'
import unreconcirc from '../../images/BodyTable/unreconcirc.png'

class TableBody extends React.Component {
  renderItems = () => {
    return itemsPurchased.map(item => {
      return (
        <tr key={item.id}>
          <td className="prac">
            <img src={vwsymbol} alt="vwsymbol" />
            <span>{item.itemType}</span>
          </td>
          <td>{item.price}</td>
          <td>{item.transNo}</td>
          <td>{item.time}</td>
          <td>
            <div
              className="recon"
              style={{
                color:
                  item.status === 'Reconciled'
                    ? '#19aa19'
                    : item.status === 'Pending'
                    ? '#e4e445'
                    : '#868484'
              }}
            >
              <img
                src={
                  item.status === 'Reconciled'
                    ? reconicon
                    : item.status === 'Pending'
                    ? pendcirc
                    : unreconcirc
                }
                alt="status icon"
              />{' '}
              <span>{item.status}</span>
            </div>
          </td>
          <td>
            <i className="fas fa-chevron-down"></i>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table className="TableBody">
          <thead>
            <tr>
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </div>
    )
  }
}

export default TableBody
