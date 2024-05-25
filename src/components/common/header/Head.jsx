import React from "react"
import logo from '/images/logo.png';
import header from '/images/headerb.png' 

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='ad'>
            <img src={header} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
