import React from 'react'
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaJs } from 'react-icons/fa';
import { SiDjango, SiTailwindcss } from 'react-icons/si';

function Skills() {
  return (
    <div name='Skills' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Skills</p>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          <div className='flex flex-col items-center'>
            <FaPython size={40} className='text-yellow-500' />
            <p className='mt-4'>Python</p>
          </div>

          <div className='flex flex-col items-center'>
            <SiDjango size={40} className='text-green-500' />
            <p className='mt-4'>Django</p>
          </div>

          <div className='flex flex-col items-center'>
            <FaJs size={40} className='text-yellow-300' />
            <p className='mt-4'>JavaScript</p>
          </div>

          <div className='flex flex-col items-center'>
            <FaReact size={40} className='text-blue-500' />
            <p className='mt-4'>ReactJS</p>
          </div>

          <div className='flex flex-col items-center'>
            <FaHtml5 size={40} className='text-red-500' />
            <p className='mt-4'>HTML</p>
          </div>

          <div className='flex flex-col items-center'>
            <FaCss3Alt size={40} className='text-blue-600' />
            <p className='mt-4'>CSS</p>
          </div>

          <div className='flex flex-col items-center'>
            <SiTailwindcss size={40} className='text-teal-400' />
            <p className='mt-4'>Tailwind CSS</p>
          </div>

          <div className='flex flex-col items-center'>
            <FaGitAlt size={40} className='text-orange-500' />
            <p className='mt-4'>Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills