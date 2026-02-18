import React from 'react'

const Hero = () => {
  return (
    <div className='container '>
        <div className='row'>
          <div className='row'>
            <img src="public/images/homeHero.png" alt=""  className='mb-5'/>
            <h1 className='mt-5 text-center'>Invest in everything</h1>
            <p className='text-center'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p3  btn btn-primary fs-5' style={{width:'30%',margin:"0 auto"}}>Sign up for free</button>
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default Hero
