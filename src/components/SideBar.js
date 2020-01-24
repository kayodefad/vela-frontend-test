import React from 'react'
import SideBarItems from './SideBarItems'
import './SideBar.css'
import generate from '../images/SideBar/VerifyTransferbutton.png'
import bgRowHover from '../images/SideBar/bgRowHover.png'
import bgRowHoverleft from '../images/SideBar/bgRowHoverleft.png'
import Main from '../images/SideBar/Main.png'
import manualsettle from '../images/SideBar/manualsettle.png'
import ManualSettlement from '../images/SideBar/ManualSettlement.png'
import merchanticon from '../images/SideBar/merchanticon.png'
import MerchantProfile from '../images/SideBar/MerchantProfile.png'
import overview from '../images/SideBar/overview.png'
import pendingordersicon from '../images/SideBar/pendingordersicon.png'
import pendingordersw from '../images/SideBar/pendingordersw.png'
import reconciledorders from '../images/SideBar/reconciledorders.png'
import reconciledordersw from '../images/SideBar/reconciledordersw.png'
import reconciledpayments from '../images/SideBar/reconciledpayments.png'
import ReconcilledPayments from '../images/SideBar/ReconcilledPayments.png'
import SideBarRect from '../images/SideBar/SideBarRect.png'
import smallorders from '../images/SideBar/smallorders.png'
import smallpaymt from '../images/SideBar/smallpaymt.png'
import unreconciled from '../images/SideBar/unreconciled.png'
import unreconcilledPayments from '../images/SideBar/unreconcilledPayments.png'
import Vector from '../images/SideBar/Vector.png'
import allorders from '../images/SideBar/allorders.png'
import AllOrderswords from '../images/SideBar/AllOrderswords.png'
import AllPayments from '../images/SideBar/AllPayments.png'
import allpaymentsicon from '../images/SideBar/allpaymentsicon.png'

const SideBar = () => {
  return (
    <div className="SideBar">
      <div>
        <img src={generate} alt="Generate Invoice" />
      </div>
      <div>
        <img src={Main} alt="Main" />
      </div>
      <div className="overview">
        <img src={bgRowHoverleft} alt="bgRowHoverLeft" />
        <img src={Vector} alt="Overview icon" />
        <img src={overview} alt="overview" />
      </div>
      <div>
        <img src={smallpaymt} alt="smallpaymt" />
      </div>
      <SideBarItems icon={allpaymentsicon} text={AllPayments} />
      <SideBarItems icon={reconciledpayments} text={ReconcilledPayments} />
      <SideBarItems icon={unreconciled} text={unreconcilledPayments} />
      <SideBarItems icon={manualsettle} text={ManualSettlement} />
      <div><img src={smallorders} alt={smallorders} /></div>
      <SideBarItems icon={allorders} text={AllOrderswords} />
      <SideBarItems icon={pendingordersicon} text={pendingordersw} />
      <SideBarItems icon={reconciledorders} text={reconciledordersw} />
      <SideBarItems icon={merchanticon} text={ManualSettlement} />
    </div>
  )
}

export default SideBar
