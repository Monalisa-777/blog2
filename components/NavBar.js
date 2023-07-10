import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[15%] flex bg-black text-white'>
    <div className='h-[100%] w-fit flex'>
            <img src= 'p.webp' alt='image' className='h-full w-full'/>
               
            </div>
            <div className='pl-[30%] p-4'>
            <h1 className='md:text-5xl text-white font-mono'>Test Blog</h1>
            </div>
        </div>
    
  )
}

export default NavBar
