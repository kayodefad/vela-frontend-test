import React from 'react'
import './SideBar.css'
import manualsettle from '../../images/SideBar/manualsettle.png'
import merchanticon from '../../images/SideBar/merchanticon.png'
import pendingordersicon from '../../images/SideBar/pendingordersicon.png'
import reconciledorders from '../../images/SideBar/reconciledorders.png'
import reconciledpayments from '../../images/SideBar/reconciledpayments.png'
import unreconciled from '../../images/SideBar/unreconciled.png'
import Vector from '../../images/SideBar/Vector.png'
import allorders from '../../images/SideBar/allorders.png'
import allpaymentsicon from '../../images/SideBar/allpaymentsicon.png'

const SideBar = () => {
  return (
    <div className="SideBar">
      <button>GENERATE INVOICE</button>
      <h3>Main</h3>
      <div>
        <div className="overview">
          <img src={Vector} alt={Vector} />
          <span>Overview</span>
        </div>
      </div>
      <h3>Payments</h3>
      <div>
        <div className="allpayments">
          <img src={allpaymentsicon} alt={allpaymentsicon} />
          <span>All Payments</span>
        </div>
      </div>
      <div>
        <div className="reconciledpayments">
          <img src={reconciledpayments} alt={reconciledpayments} />
          <span>Reconciled Payments</span>
        </div>
      </div>
      <div>
        <div className="unreconciledpay">
          <img src={unreconciled} alt={unreconciled} />
          <span>Un-reconciled Payments</span>
        </div>
      </div>
      <div>
        <div className="manualsettle">
          <img src={manualsettle} alt={manualsettle} />
          <span>Manual Settlement</span>
        </div>
      </div>
      <h3>Orders</h3>
      <div>
        <div className="allorders">
          <img src={allorders} alt={allorders} />
          <span>All orders</span>
        </div>
      </div>
      <div>
        <div className="pendingorders">
          <img src={pendingordersicon} alt={pendingordersicon} />
          <span>Pending Orders</span>
        </div>
      </div>
      <div>
        <div className="reconciledorders">
          <img src={reconciledorders} alt={<img src={Vector} alt={Vector} />} />
          <span>Reconciled Orders</span>
        </div>
      </div>
      <p>
        <img src={merchanticon} alt={merchanticon} />
        <span>Merchant profile</span>
      </p>
    </div>
  )
}

export default SideBar
