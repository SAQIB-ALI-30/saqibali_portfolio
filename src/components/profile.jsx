import React from 'react'
import Home1 from '../assets/hero.png'
import {Link} from 'react-scroll'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

function Profile() {
  return (
    <div name='Profile' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-0 xs:pt-custom-top'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-2xl sm:text-5xl font-bold text-white'>
          Bringing Web Visions to Life with Care
          </h2>
          <p style={{ textAlign: 'justify' }} className='text-gray-500 py-5 max-w-md font-classix'>
          I’m a full-stack developer with a love for both the front and back end of web development. I enjoy solving problems and creating websites that are easy to use and look great. I’m always learning, and I like taking on challenges that help me grow. Let’s connect and explore new ideas together!
          </p>
          <div>
            <Link to='Projects' smooth={true} duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Projects
              <span className='group-hover:rotate-90 duration-500'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
      <div className='shadow-lg shadow-cyan-500 rounded-2xl'>
        <img src={Home1} alt="my profile" className='mx-auto w-80 md:w-96 rounded-2xl' />
      </div>
      </div>
      </div>
  );
};

export default Profile