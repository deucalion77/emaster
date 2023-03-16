import React, { useState } from 'react'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img7 from './img/img7.png'
import img8 from './img/img8.png'
import img9 from './img/img9.png'
import img11 from './img/img11.png'

function Register() {

  const [studentname, setStudentname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
        <div className=" md:absolute sm:bg-center bg-white top-24 right-2/4 p-4 flex flex-col items-start justify-center shadow-none h-full  ">
      <form
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <h2 className="text-6xl text-left font-extrabold mb-2 text-black top" style={{ fontFamily: 'Dela Gothic One' }}>Sign up</h2>
        
        <h3 className="text-2xl text-left font-extrabold text-gray-500">and start learning </h3>
        <br />
        <div className="flex">
        <img src={img7} alt=""  className=" absolute"  />
        <input type="text" placeholder="  Full name" name="name" id="name" className=" text-center border-b-2" onChange={ 
          (e)=>{setStudentname(e.target.value)
          }}
          />
        </div>
        <br />
        <div className="flex">
        <img src={img9} alt=""  className=" absolute"  />
        <input type="email" placeholder="  your email" name="email" id="email" className=" text-center border-b-2" onChange={ 
          (e)=>{setEmail(e.target.value)
          }}/>
        </div>
        <br />
        <div className="flex">
        <img src={img6} alt="" className=" absolute"/>
        <input type="password" placeholder=" Password" name="password" id="password" className=" text-center border-b-2" onChange={ 
          (e)=>{setPassword(e.target.value)
          }}/>
        </div>
        <br />
        <div className="flex">
        <img src={img11} alt="" className=" absolute "/>
        <input type="password" placeholder=" repeat Password" name="password" id="password" className=" text-center border-b-2" />
        </div>
        <br />
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="mr-2 "> I agree to all terms and services</label>
        <br   />
        <br />
        <button className="border rounded-xl bg-blue-500 text-black border-blue-500 h-10 w-40 text-md font-bold ml-4" type="submit">Register</button>
      </form>
    </div>
      <img src={img8} alt="" className="hidden md:block absolute top-44 left-1/2 w-fit h-fit object-cover"/>
    </div>
  )
}

export default Register