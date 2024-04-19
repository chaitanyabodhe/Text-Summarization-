import React from 'react';
import { NavLink } from 'react-router-dom';
function Gram(){
    return (
        <div className=' flex self-center place-content-center place-items-center sm:bg-[#222831] w-full h-screen'>
            <div className=" mx-auto sm:h-[550px]">
            <div className=' text-white pb-10 text-4xl font-bold  uppercase align-center align-middle text-center flex items-center justify-center '>
              <h1>GRAMMAR CHECKER</h1>
            </div>
            <div className=''>
              <textarea placeholder='     Enter or paste your Text...'  className=' placeholder:text-black placeholder:font-semibold border-none outline-none  resize-none placeholder-px-12 opacity-40 rounded-lg h-20 sm:w-[900px]'>
              </textarea>
            </div>
            <div className='  py-12'>
            <textarea placeholder='     Generated ...'  className='  placeholder:text-black placeholder:font-semibold border-none outline-none  resize-none placeholder-px-12 opacity-40 rounded-lg h-20 sm:w-[900px]'>
              </textarea>
            </div>
            <div className='align-middle flex items-center justify-center '>
            <button className='  border-none outline-none font-bold hover:shadow-xl shadow-white text-black font-sans text-xl hover:bg-slate-300  bg-white w-52 h-12  resize-none placeholder-px-12 opacity-40 rounded-lg'>
                Generate
              </button>
              </div>
          </div>
        </div>
    );
}

export default Gram;
