import React from 'react'
import './TableHeader.css'

const Table = () => {
  return (
    <div className="Table">
      <h2>Payments</h2>
      <div className="table-top">
        <small>
          Showing{' '}
          <span>
            <select className="select-date">
              <option value="0">20</option>
              <option value="1">20</option>
              <option value="2">20</option>
            </select>
          </span>{' '}
          out of 500 payments
        </small>
        <span style={{marginLeft: '40px', marginRight:'85px'}} className="search">
          <input type="text" placeholder="Search payments" />
        </span>
        <span className="selectcategory">
          <small>Show</small>{' '}
          <select className="show-all">
            <option value="0">All</option>
            <option value="1">Reconciled</option>
            <option value="2">Un-reconciled</option>
            <option value="2">Un-reconciled</option>
            <option value="2">Settled</option>
            <option value="2">Unsettled</option>
          </select>
        </span>
      </div>
    </div>
  )
}

export default Table
