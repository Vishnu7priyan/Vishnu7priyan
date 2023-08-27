'use client'
import Image from 'next/image'
import Head from 'next/head'
import deved from '../public/dev-ed-wave.png'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillAlert} from 'react-icons/ai';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';


export default function Home(){ 
  
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode?"dark" : ""}>

    <main className='px-10   md:px-20 lg:px-40 dark:bg-gray-900'>
    <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-burtons dark:text-white'>Developed By</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() =>setDarkMode(!darkMode)}  className="cursor-pointer text-2xl" />
          </li>
          <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
        </ul>
      </nav>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Vishnupriyan</h2>
        <h3 className='text-2xl md:text-3xl py-2 dark:text-white'>Hacker and Progammer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto'>
          
A skilled freelance pentester, adept at probing digital fortresses, I safeguard systems by exposing vulnerabilities, ensuring ironclad security through meticulous analysis and insightful recommendations.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <AiFillLinkedin />
        <AiFillTwitterCircle />
        <AiFillYoutube />
        <AiFillAlert/>
      </div>
      <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
        <Image src={deved} layout='fill' objectFit='cover' alt='none'/>
      </div>
    </section>
    <section>
      <div className='py-20'>
        <h3 className='text-3xl py-1 text-center dark:text-white'>
          Services I offer
        </h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-white' >
        Employing a methodical approach, I simulate cyber attacks to unearth system weaknesses, fortifying digital landscapes for clients as a dedicated freelance pentester. My expertise lies in identifying vulnerabilities and delivering actionable solutions to enhance cybersecurity.
        </p>

      </div >
      <div className='lg:flex gap-10 justify-center'>
        <div className='flex justify-center dark:text-white items-center flex-col  shadow-lg rounded-xl my-10  p-20  '>
          <Image className='object-center	' src={design} width={100} height={100} alt='lgo'/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <h4 className='py-4 text-teal-600'>Tools I use</h4>
          <p>Burpsuite</p>
          <p>Ubuntu</p>
          <p>Foxy Proxy</p>
        </div>
        <div className='flex justify-center items-center flex-col  dark:text-white shadow-lg p-20 rounded-xl my-10 '>
          <Image className='object-center	' src={code} width={100} height={100} alt='lgo'/>
          <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white '>Beautiful Designs</h3>
          <h4 className='py-4 text-teal-600'>Tools I use</h4>
          <p>Burpsuite</p>
          <p>Ubuntu</p>
          <p>Foxy Proxy</p>
        </div>
      
      
        <div className='flex justify-center dark:text-white items-center flex-col  shadow-lg p-20 rounded-xl my-10'>
          <Image className='object-center	' src={consulting} width={100} height={100} alt='lgo'/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <h4 className='py-4 text-teal-600'>Tools I use</h4>
          <p>Burpsuite</p>
          <p>Ubuntu</p>
          <p>Foxy Proxy</p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl py-1 dark:text-teal-500'>Portfolio</h3> 
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
<div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={100000} height={100} src={web1} alt='none'/></div>
<div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={100000} height={100} src={web2} alt='none'/></div>
<div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={100000} height={100} src={web3} alt='none'/></div>
<div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={100000} height={100} src={web4} alt='none'/></div>
<div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={100000} height={100} src={web5} alt='none'/></div>
<div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={100000} height={100} src={web6} alt='none'/></div>
</div>
    </section>
    </main>
    </div>
  )
};
