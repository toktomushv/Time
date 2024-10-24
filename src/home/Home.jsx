import React from 'react'
import imgThree from '../img/fon.png'

function Home() {
  return (
    <>
      {/* <div>
        <img className='w-max relative' src={imgThree} alt="" />
        <div className='text-center text-xs font-normal'>
          <div className='m-2'>
          <h1 className='text-6xl'>PORTEN</h1>
          <h3 className='text-2xl mb-14'>САНКТ-ПЕТЕРБУРГ</h3>
          <p className='text-base'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor <br /> pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum <br /> nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. <br /> Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
          </div>
         
        </div>

      </div> */}
       <div className="relative w-300 h-200">
      <img src={imgThree} alt="Your Image" className="w-full" />
      <div className="absolute inset-0  justify-center items-center text-white text-lg text-center align-item-center">
      <h1 className='text-7xl text-center mb-14 mt-40'>PORTEN</h1>
      <h3 className='text-3xl'>САНКТ-ПЕТЕРБУРГ</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor <br /> pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum <br /> nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. <br /> Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
        
      </div>
    </div>
    </>
  )
}

export default Home
