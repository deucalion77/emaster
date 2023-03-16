import React from 'react'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import { 
  ArrowRightIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

export default function Main() {
  return (
    <div className="w-full h-screen border border-gray-100 relative ">
      <img src={img3} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit object-cover"/>
      <img src={img2} alt="" className="absolute top-0 right-0 w-fit h-fit object-cover"/>
      <img src={img1} alt="" className="hidden md:block absolute top-0 left-1/2 w-fit h-fit object-cover" style={{zIndex: '10'}}/>
      <div className="absolute bg-white top-0 left- p-4 flex flex-col items-start justify-center shadow-none h-full w-[440px] ">
        <h2 className="text-6xl font-extrabold mb-2 " style={{ fontFamily: 'Montserrat' }}>Sri Lanka's #1 online learning platform</h2>
        <br />
        <h3 className="text-xl font-semibold text-gray-500" style={{ fontFamily: 'monospace' }}>Study any local curriculum lesson</h3>
        <br />
        <h3 className="text-xl font-bold flex items-center" style={{ fontFamily: 'monospace' }}>
          Sing In 
          <ArrowRightIcon className="h-4 w-4" />
          <button className="border rounded-xl bg-green-500 text-black border-green-500 h-10 w-58 text-md font-bold ml-4">
            Learn more
          </button>
        </h3>
        <br />
        <div className="flex">
          <div className="flex w-fit h-fit border border-gray-100 relative">
            <BoltIcon className="h-10 w-10 text-green-900" style={{ fill: 'green' }} />
            <h2 className=" text-5xl font-extrabold flex items-center">700+</h2>
            <span className="ml-1 mr-1 text-2xl font-bold">|</span>
          </div>
          <div className="flex w-fit h-fit border border-gray-100 relative">
            <BoltIcon className="h-10 w-10 text-green-900" style={{ fill: 'green' }} />
            <h2 className="text-5xl font-extrabold flex items-center">575k+</h2>
          </div>
        </div>
        <div className="flex items-center text-gray-500">
         
          <pre>Hours of content     Active users</pre>

        </div>
      </div>
    </div>
  )
}
