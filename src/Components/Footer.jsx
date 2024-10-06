import React from 'react'
import footer1 from '../assets/icons/footer1.png'
import footer2 from '../assets/icons/footer2.png'
import footer3 from '../assets/icons/footer3.png'
import footerlogo from '../assets/icons/footerlogo.png'
import footerlogo2 from '../assets/icons/footerlogo2.png'
import { FaSquareInstagram ,FaXTwitter,FaDiscord, FaGithub  } from "react-icons/fa6";

function Footer() {
  return (
    <div className='ml-20 pt-20'>
      <div className='rounded-lg bg-gray-100 grid grid-cols-2 p-4'>
        <div>
          <div className='flex justify-start gap-4 pt-2 pb-10'>
            <img className='w-15 h-8 ' src={footerlogo2} alt='' />
            <img className='w-15 h-8' src={footerlogo} alt='' />
          </div>
          <div className='pt-10 text-sm  text-gray-500 pb-10'>
          PyHack provides a wide range of resources and hands-on experience to help you master
           Python-based game development . Explore new techniques , share your creations , and 
           collaborate with fellow developers . Whether you're looking to build indie games or 
           start a career in the gaming industry , PyHack is the place to begin .
          </div>
          <div className='flex gap-3 pt-10  text-gray-500'>
            <FaSquareInstagram />
            <FaXTwitter />
            <FaDiscord />
            <FaGithub /> 
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className=' justify-end'>
            <div className='font-semibold '>Resources</div>
               <div className='justify-center items-center text-gray-500 text-sm pt-2'>
                 <div>Brand</div>
                 <div>FAQ</div>
                 <div>Help & Support </div>
                 <div> Governance </div>
               </div>
          </div>
          <div>
            <div className='font-semibold '>Developers</div>
            <div className='justify-center items-center text-gray-500 text-sm pt-2'>
                 <div>Technical Paper</div>
                 <div>Security</div>
                 <div>Game Design</div>
              </div>
          </div>
          <div>
            <div className='font-semibold '>Company</div>
            <div className='justify-center items-center text-gray-500 text-sm pt-2'>
                 <div>Privacy Policy</div>
                 <div>Terms of Use </div>
                 <div>Contact</div>
              </div>
          </div>
        </div>
        </div>
    
      <div className='grid gap-2 pb-10 pt-2'> 
          <img src={footer1} alt='' />
          <img src={footer2} alt='' />
          <img src={footer3} alt='' />
      </div>
    
    
    </div>
  )
}

export default Footer