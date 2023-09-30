import React from 'react'

const  About= () => {
  return (
    <div name ='about'className='w-full h-screen bg-[#0d203d] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi , I am Yash,  I'm currrently working as a SWE Intern at DPS Munich</p>
                    </div>
                    <div className='font-bold'>
                        <p>
                        I've previously served as a LFX Mentee at Kubescape and in the Kubernetes 1.27 Release Team. I am passionate about DevOps and cloud-native.I love tinkering with backend when I'm free. 
                        PS :- I also play 🎹(the other keys) sometimes
                        </p> 
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About 