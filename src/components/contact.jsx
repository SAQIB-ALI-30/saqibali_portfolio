import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md';

function Contact() {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'>
    <div className='max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-auto bg-gray-900 rounded-lg shadow-lg shadow-cyan-500'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Saqib Ali</p>
        </div>

        <div className='flex items-center justify-start py-2'>
            <MdEmail size={30} className='text-cyan-500 mr-4' />
            <p className='text-lg font-classix'>saqibali2049@gmail.com</p>
        </div>

        <div className='flex items-center justify-start py-2'>
            <MdPhone size={30} className='text-cyan-500 mr-4' />
            <p className='text-lg font-classix'>+92 307 3905030</p>
        </div>
    </div>
</div>
  )
}

export default Contact