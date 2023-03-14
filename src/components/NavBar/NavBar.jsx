import React from 'react'

const NavBar = () => {
  return (
    <div className='flex z-50 w-full bg-[#000000] top-0'>
        <nav className=' relative flex  h-12 items-center md:max-w-[1240px]  px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#FFDA00] cursor-pointer' ><a href='/'>PALMMELT<i class="fa-solid fa-code"></i></a></h1>
        </nav>
    </div>
  )
}

export default NavBar