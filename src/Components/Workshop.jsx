import React from 'react'
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'
import icon4 from '../assets/icons/icon4.png'

function Workshop() {
  return (
    <div className='font-Body  ml-20 pt-20'>
    <div className='pt-2 pb-20 font-semibold text-5xl '>Workshop Features</div>
    <div className='grid grid-cols-2 grid-rows-2 gap-7 w-full rounded-xl'> 
        <div className=' bg-gray-50  '>
            <div className='flex justify-end pb-2'>
            <img className=' justify-end' src={icon1} alt="icon"/>
            </div>
            
            <div className='pt-2 font-semibold text-2xl'>Game Mechanics</div>
            <div>Master physics , collision detection , AI, and game loops</div>
        </div>
        <div className=' bg-gray-50'>
            <div className='flex justify-end pb-2'>
              <img className=' justify-end' src={icon2} alt="icon"/>
            </div>
            <div className='pt-2 font-semibold text-2xl '>Visual Effects</div>
            <div>Create 2D/3D graphics and animations</div>
        </div>
        <div className=' bg-gray-50'>
            <div className='flex justify-end pb-2'>
               <img className=' justify-end' src={icon3} alt="icon"/>
            </div>
            <div className='pt-2 font-semibold text-2xl '>Game Balancing</div>
            <div>Balance difficulty and progression </div>
        </div>
        <div className=' bg-gray-50'>
            <div className='flex justify-end pb-2'>
               <img className=' justify-end' src={icon4} alt="icon"/>
            </div>
            <div className='pt-2 font-semibold text-2xl '>Cross-Platform Dev</div>
            <div>Deploy games on PC, web and mobiles</div>
        </div> 

        
      </div>
    </div>
  )
}

export default Workshop