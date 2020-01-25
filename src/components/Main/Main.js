import React from 'react'
import MainFirstRow from '../MainFirstRow/MainFirstRow'
import MainSecondRow from '../MainSecondRow/MainSecondRow'
import Table from '../Table'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
      <MainFirstRow />
      <MainSecondRow />
      <Table />
      <Footer />
    </div>
  )
}

export default Main
