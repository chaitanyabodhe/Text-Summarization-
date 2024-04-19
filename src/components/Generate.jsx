import React from 'react';
import { NavLink } from 'react-router-dom';

function Generate(){
    
    return (
        <div className='mx-auto sm:h-[550px]'>
            <div className=' text-white lg:py-14 text-4xl font-bold  uppercase'>
              <h1>Plagairsm checker</h1>
            </div>
            <div className=' text-white  text-4xl font-bold  uppercase'>
                <h1>score</h1>
            </div>
            <div className=' text-white pt-60 text-4xl font-bold  uppercase'>
                <h1>your score :</h1> 
            </div>
            <div className=' pt-10 pl-[467px] align-middle'>
            <div className='  pt-2 border-none outline-none font-bold hover:shadow-xl shadow-white text-black font-sans text-xl hover:bg-slate-300  bg-white w-52 h-12  resize-none placeholder-px-12 opacity-40 rounded-lg'>
            <NavLink
                                to="/Plag"
                                >
                                    Back
                                </NavLink>
            </div>
            </div>
        </div>
    );
}

export default Generate;
