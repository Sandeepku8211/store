import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <NavLink to='/' className='w-full'>
      <div className='flex flex-col sm:flex-row border border-gray-500'>
        <div className='w-full sm:w-1/2 items-center flex  justify-center sm:py-10 py-10'>
        <div className='text-black'>
            <div className='flex item-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-black'></p>
                <p className='font-medium text-sm md:text-base'>Our BEST SELLER</p>

            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg-text-5xl leading-relexed'>LATEST Arivals</h1>
            <div className='flex item-center gap-2'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-black'></p>

            </div>

        </div>

        </div>
        <img className='w-full sm:w-1/2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmNPXtysMZGHTIB-TquMnOlM4VAvFs56yUsbxaB8BkRKZkg3xbAQ3BsmGxcYTEMa00DU&usqp=CAU' alt="" />
      
    </div>
    </NavLink>
  )
}

export default Hero
