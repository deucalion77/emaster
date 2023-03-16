import React from 'react';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import Register from '../Register';

function LoginForm() {
  return (
    <div>
    <div
      style={{

        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={img5} alt="" className="hidden md:block absolute top-32 left-56 w-fit h-fit object-cover" />
      <form
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <h2 className="text-6xl text-left font-extrabold mb-2 text-black top" style={{ fontFamily: 'Dela Gothic One' }}>Sign in</h2>
        <br />
        <div className="flex">
        <img src={img7} alt=""  className=" absolute"  />
        <input type="email" placeholder="  User name" name="email" id="email" className=" text-center border-b-2" />
        </div>
        <br />
        <div className="flex">
        <img src={img6} alt="" className=" absolute"/>
        <input type="password" placeholder=" Password" name="password" id="password" className=" text-center border-b-2" />
        </div>
        <br />
        <input type="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="mr-2 "> Remember me</label>
        <br   />
        <br />
        <button className="border rounded-xl bg-blue-500 text-black border-blue-500 h-10 w-40 text-md font-bold ml-4" type="submit">Log In</button>
      </form>
    </div>
    <a href="Register" className="text-center text-black text-xl font-semibold underline">create an account</a>
    </div>
  );
}

export default LoginForm;
