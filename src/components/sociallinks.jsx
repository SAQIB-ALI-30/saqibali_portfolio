import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

function Sociallinks() {
    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: 'https://www.linkedin.com/in/saqibali2023/',
          style: 'rounded-tr-md' // Use a valid URL
        },
        {
            id: 2,
            child: (
              <>
                GitHub <FaGithub size={30} />
              </>
            ),
            href: 'https://github.com/SAQIB-ALI-30/', // Use a valid URL
          },
          {
            id: 3,
            child: (
              <>
                Mail <HiOutlineMail size={30} />
              </>
            ),
            href: 'mailto:saqibali2049@gmail.com', // Use a valid URL
          },
          {
            id: 4,
            child: (
              <>
                Resume <BsFillPersonLinesFill size={30} />
              </>
            ),
            href: 'Saqib_Ali_Resume.pdf',
            style: 'rounded-br-md',
            Download:true, // Use a valid URL
          },
      ]; 
  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, Download})=>(
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full text-white' download={Download} target='_blank' rel="noreferrer">
                {child}
               </a>
            </li>
            ))}  
        </ul>
    </div>
  )
}

export default Sociallinks