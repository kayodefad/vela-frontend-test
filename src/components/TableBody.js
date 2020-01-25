import React from 'react'
import './TableBody.css'
import { itemsPurchased } from '../itemsPurchased'
import ItemDetail from './ItemDetail'
import vwsymbol from '../images/BodyTable/vwsymbol.png'
import pendcirc from '../images/BodyTable/pendcirc.png'
import reconicon from '../images/BodyTable/reconicon.png'
import unreconcirc from '../images/BodyTable/unreconcirc.png'

const renderItems = () => {
  return itemsPurchased.map(item => {
    return <tr>
    <td className="prac">
      <img src={vwsymbol} alt="vwsymbol" />
      <span>{item.itemType}</span>
    </td>
    <td>{item.price}</td>
    <td>{item.transNo}</td>
    <td>{item.time}</td>
    <td>
      <span className="recon">
        <img src={reconicon} alt="reconicon" /> <span>{item.status}</span>
      </span>
    </td>
    <td>
      <i className="fas fa-chevron-down"></i>
    </td>
  </tr>
  })
}

const TableBody = () => {
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
        <tbody>
          {renderItems()}
          {/* <tr>
            <td className="prac">
              <img src={vwsymbol} alt="vwsymbol" />
              <span>Oluwakayode Fad</span>
            </td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>12:30</td>
            <td>
              <span className="recon">
                <img src={reconicon} alt="reconicon" /> <span>Reconciled</span>
              </span>
            </td>
            <td>
              <i className="fas fa-chevron-down"></i>
            </td>
          </tr> */}
          {/* <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>12:30</td>
            <td>
              <img src={unreconcirc} alt="unreconcirc" /> Pending
            </td>
            <td>
              <i className="fas fa-chevron-down"></i>
            </td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>12:30</td>
            <td>
              <img src={pendcirc} alt="pendcirc" /> Un-reconciled
            </td>
            <td>
              <i className="fas fa-chevron-down"></i>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default TableBody
