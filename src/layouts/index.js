import React from 'react'
import Header from '../components/Header'

const Layout = ({activeUsr}) => {
  let activeUsrIn = activeUsr
  return (
    <>
    <Header activeUsrIn={activeUsrIn}/>
    </>
  )
}

export default Layout