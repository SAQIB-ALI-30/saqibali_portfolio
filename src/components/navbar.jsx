import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav]= useState(false);
    const links =[
        {
            id: 1,
            link: 'Profile'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Projects'
        },
        {
            id: 4,
            link: 'Skills'
        },
        {
            id: 5,
            link: 'Contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
    {/* <FaBars/> */}
    <div>
        <h1 className='text-6xl font-signature ml-2'>Saqib ali</h1>
    </div>
    <ul className='hidden md:flex'>
        {links.map(({id, link})=>(
            <li
        key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-300'>
        <Link to={link} smooth={true} duration={500}>
         {link}
        </Link>
        </li>           
        ))}
    </ul>
    <div onClick={()=>setNav(!nav)} className='courser-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} />: <FaBars size={30}/> }
        
    </div>

     {nav && (

    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
    {links.map(({id, link})=>(
            <li
        key={id} className='px-4 text-4xl cursor-pointer capitalize py-6 font-medium text-gray-500 hover:scale-105 duration-300'>
       <Link onClick={() => setNav(!nav)} to={link} smooth={true} duration={500}>
         {link}
        </Link>
        </li>           
        ))}
    </ul>
    )}

    </div>
 );
}

export default NavBar