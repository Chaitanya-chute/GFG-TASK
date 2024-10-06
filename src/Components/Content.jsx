import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import icon0 from '../assets/icons/icon0.png'
import icon6 from '../assets/icons/icon6.png'

function content() {
  return (
    <div className='font-Body ml-20'>
    <div className='flex  bg-gray-200 rounded-lg w-fit px-2 text-sm'>
        <div className='my-0 flex '>
            <div className='flex px-2'> Introducing an era of new and exciting game development  </div>
            <div className='text-gray-500 flex justify-items-center justify-center gap-3'><GoDotFill /> Read More <FaArrowRightLong/></div>
          </div>
    </div>
      <div className='pt-2 font-semibold text-5xl py-4 '> Access the full power of <br /> Python Game Development </div>
      <div className=' text-gray-600 text-xl mb-5'>The ultimate game dev workshop for Python Enthusiasts. <br />Learn , create and innovate with the most versatile pl.</div>
      
      <div className='border-black '>
      <div className='flex gap-2 rounded-full bg-transparent border-2 border-gray-200 w-fit px-4'>Get Started <FaArrowRightLong/></div>
      </div>
      <div>
        <img src={icon0} alt="design" />
        <img className='' src={icon6} alt="design" />
      </div>
        
    </div>
  )
}

export default content