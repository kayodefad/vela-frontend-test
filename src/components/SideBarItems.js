import React from 'react'

const SideBarItems = props => {
  return (
    <div>
      <img src={props.icon} alt={props.icon} />
      <img src={props.text} alt={props.text} />
    </div>
  )
}

export default SideBarItems
