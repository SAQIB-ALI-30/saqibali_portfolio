import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

function About() {
  return (
    <div name='About' style={{ textAlign: 'justify' }} className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Story</p>
            </div>
            <p className='font-classix'>As an IT graduate from 2023, my journey has been one of curiosity, exploration, and growth. Teaching IT courses has been a fulfilling part of my experience, allowing me to share knowledge while honing my own skills. From programming in languages like Python, JavaScript, and Django to embracing AI tools, I strive for efficiency but value learning hands-on, without shortcuts. With a calm mind and a knack for critical thinking, I enjoy solving problems and crafting solutions. Technology excites me, but it's the process of learning that truly fuels my passion.</p>
            <br/>
            <p className='font-classix'>I’m pursuing this path to bridge the gap between technology and real-world solutions. In the next five years, I aim to deepen my expertise in programming and AI, mentor aspiring developers, and contribute to impactful projects. My ultimate goal is to innovate while continuously growing as a learner.</p>
            <div>
            <button className='sm:hidden flex group text-white w-fit px-9 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              <a href="Saqib_Ali_Resume.pdf" download={false} target='_blank'>Get Resume</a>
              <span className='group-hover:rotate-90 duration-500 '>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default About