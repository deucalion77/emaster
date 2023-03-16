import React from 'react'
import img4 from './img/img4.png'

function teach() {
  return (
    <div>
      <div className=" w-full h-screen border border-gray-100 relative">
      <img src={img4} alt=""  className="hidden md:block absolute top-32 left-1/2 w-fit h-fit object-cover"/>
      <div className="absolute bg-white top-0 left-48 p-4 flex flex-col items-start justify-center shadow-none h-full w-[440px]">
      <h2 className="text-6xl text-left font-extrabold mb-2" style={{ fontFamily: 'Dela Gothic One' }}>Come Teach with us</h2>
        <br />
        <h3 className=" text-2xl text-left font-semibold text-gray-500" style={{ fontFamily: 'monospace' }}>Become an instructor and change 
lives — including your </h3>
        <br />
        
        <button className="border bg-purple-700 text-white border-purple-70 h-14 w-64 text-2xl font-bold ml-4" style={{fontFamily: 'monospace'}}>
        get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default teach