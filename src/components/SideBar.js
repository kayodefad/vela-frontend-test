import React from 'react'
import './SideBar.css'
import manualsettle from '../images/SideBar/manualsettle.png'
import merchanticon from '../images/SideBar/merchanticon.png'
import pendingordersicon from '../images/SideBar/pendingordersicon.png'
import reconciledorders from '../images/SideBar/reconciledorders.png'
import reconciledpayments from '../images/SideBar/reconciledpayments.png'
import unreconciled from '../images/SideBar/unreconciled.png'
import Vector from '../images/SideBar/Vector.png'
import allorders from '../images/SideBar/allorders.png'
import allpaymentsicon from '../images/SideBar/allpaymentsicon.png'

const SideBar = () => {
  return (
    <div className="SideBar">
      <button>GENERATE INVOICE</button>
      <h3>Main</h3>
      <div className="overview"><img src={Vector} alt={Vector} />Overview</div>
      <h3>Payments</h3>
      <div><img src={allpaymentsicon} alt={allpaymentsicon} />All Payments</div>
      <div><img src={reconciledpayments} alt={reconciledpayments} />Reconciled Payments</div>
      <div><img src={unreconciled} alt={unreconciled} />Un-Reconciled Payments</div>
      <div><img src={manualsettle} alt={manualsettle} />Manual Settlement</div>
      <h3>Orders</h3>
      <div><img src={allorders} alt={allorders} />All Orders</div>
      <div><img src={pendingordersicon} alt={pendingordersicon} />Pending Orders</div>
      <div><img src={reconciledorders} alt={<img src={Vector} alt={Vector} />  } />Reconciled Orders</div>
      <p><img src={merchanticon} alt={merchanticon} />Merchant Profile</p>
    </div>
  )
}

export default SideBar
