import React from 'react';
import Node from '../assets/node.png';
import react from '../assets/react.png';
import Python from '../assets/python.png';
import Go from '../assets/go.png';
import AWS from '../assets/aws.png';
import Postgres from '../assets/postgres.png'
import Prometheus from '../assets/prometheus.png';
import Grafana from '../assets/grafana.png';
import Mongo from '../assets/mongo.png';
import JavaScript from '../assets/javascript.png';
import Jenkins from '../assets/jenkins.png';
import C from '../assets/c.png';
import Tailwind from '../assets/tailwind.png';
import Redis from '../assets/redis.png';
import Django from '../assets/django.png';
import Kubernetes from '../assets/kubernetes.png'
 

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>Techonologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-col-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="C++ icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Go} alt="C++ icon" />
                    <p className='my-4'>Go</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="C++ icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="C++ icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="C++ icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="C++ icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="C++ icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Django} alt="C++ icon" />
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Postgres} alt="C++ icon" />
                    <p className='my-4'>Postgres</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="C++ icon" />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Redis} alt="C++ icon" />
                    <p className='my-4'>Redis</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="C++ icon" />
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Kubernetes} alt="C++ icon" />
                    <p className='my-4'>Kubernetes</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Prometheus} alt="C++ icon" />
                    <p className='my-4'>Prometheus</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Grafana} alt="C++ icon" />
                    <p className='my-4'>Grafana</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Jenkins} alt="C++ icon" />
                    <p className='my-4'>Jenkins</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills