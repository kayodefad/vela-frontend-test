import React from 'react'
import './TableBody.css'
import vwsymbol from '../images/BodyTable/vwsymbol.png'

const TableBody = () => {
  return (
    <div>
      <table className="TableBody">
        <tr>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transaction No</th>
          <th>Time</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td className="prac"><img src={vwsymbol} alt="vwsymbol" /><span>Oluwakayode Fad</span></td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>12:30</td>
          <td>Pending</td>
          <td><i class="fas fa-chevron-down"></i></td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  )
}

export default TableBody
