import React from 'react';
import { Link,NavLink } from 'react-router-dom';

function Plag(){
    return (
        <div>
            <div className="  mx-auto  sm:h-[550px]">
            <div className='align-middle flex items-center justify-center   text-white lg:py-14 text-4xl font-bold  uppercase'>
              <h1> Plagiarism checker</h1>
            </div>
            <div className='align-middle flex items-center justify-center '>
              <textarea placeholder='     Enter or paste your Text...'  className=' align-middle flex items-center justify-center  placeholder:text-black placeholder:font-semibold border-none outline-none  resize-none placeholder-px-12 opacity-40 rounded-lg h-72 sm:w-[900px]'>
              </textarea>
            </div>
            
            
            <div className=' pt-4 align-middle flex items-center justify-center  align-middle'>
            <div className=' pl-14  pt-2 border-none outline-none font-bold hover:shadow-xl shadow-white text-black font-sans text-xl hover:bg-slate-300  bg-white w-52 h-12  resize-none placeholder-px-12 opacity-40 rounded-lg'>
            
            <NavLink
                                to="/Generate"
                                >
                                    Generate
            </NavLink>
            </div>
            </div>
          </div>
        </div>
    );
}

export default Plag;
