import React from 'react'
import logo from '../assets/logo.png'


function Navbar() {
  return (
    <nav className='mb-7 ml-20 flex items-center justify-between py-6'>
      <div >
        <img src={logo} alt='Logo' />
      </div>
      <div className=' flex gap-4  w-screen font-Body justify-end  py-2 '>
        <div>Products</div>
        <div>Resources</div>
        <div>Developers</div>
        <div className='bg-black text-white rounded-full justify-items-center px-2'> Open App </div>
        
        
        
      </div>
    </nav>
  )
}

export default Navbar;