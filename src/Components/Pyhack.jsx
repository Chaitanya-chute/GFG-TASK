import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import icon5 from '../assets/icons/icon5.png'

function Pyhack() {
  return (
    <div className='mt-20 ml-20 font-Body pt-10'>
        <div className='pt-2 pb-2 font-semibold text-5xl py-4'>About PyHack</div>
        <div className=' text-gray-600 text-xl mb-5'>PyHack is a dynamic , community driven workshop <br />designed to teach game development using Python.</div>
        <div className='flex gap-2 pb-10 underline'>Learn More <FaArrowRightLong/></div>
        <img className='pt-8 pb-10' src={icon5} alt=''/>
    </div>
  )
}

export default Pyhack