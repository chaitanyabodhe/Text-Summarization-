import React from 'react';
import { NavLink } from 'react-router-dom';
function Para(){
    return (
        <div className=' sm:bg-[#222831] '>
            <div className=" mx-auto sm:h-[550px]">
            <div className='align-middle flex items-center justify-center  text-white lg:py-14 text-4xl font-bold  uppercase'>
              <h1>Paraphasing tool</h1>
            </div>
            <div className='align-middle flex items-center justify-center '>
              <textarea placeholder='     Enter or paste your Text...'  className=' placeholder:text-black placeholder:font-semibold border-none outline-none  resize-none placeholder-px-12 opacity-40 rounded-lg h-20 sm:w-[900px]'>
              </textarea>
            </div>
            <div className=' align-middle flex items-center justify-center  py-12 '>
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

export default Para;
