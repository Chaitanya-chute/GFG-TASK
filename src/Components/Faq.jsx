import React from 'react';
import { IoAddSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

function Faq() {
  return (
    <div className='ml-20 pt-6 pb-20'>
        <div className='font-semibold text-5xl py-4'>FAQs</div>
        <div className='grid gap-4   justify-center'> 
          <div className='bg-gray-100 flex text-lg p-4 rounded-lg justify-between w-full  '>What is PyHack?<IoAddSharp className='text-blue-400 text-xl '/></div>
          <div className='bg-gray-100 flex text-lg p-4 rounded-lg justify-between w-full ' >Where will the workshops be held?<IoAddSharp className='text-blue-400 text-xl'/></div>
          <div className='bg-gray-100 flex text-lg p-4 rounded-lg justify-between w-full'>What will I learn at PyHack?<IoAddSharp className='text-blue-400 text-xl'/></div>
          <div className='bg-gray-100 flex text-lg p-4 rounded-lg justify-between w-full'> Do I need prior Python Experience? <IoAddSharp className='text-blue-400 text-xl '/></div>
          <div className='text-sky-400 flex gap-3  underline'>See More <FaArrowRightLong className='justify-between underline'/> </div>
        </div>
        
    </div>
  )
}

export default Faq