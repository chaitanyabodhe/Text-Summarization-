import React from 'react';

function Textsum(){
    return (
        <div className='max w-full h-screen  flex self-center place-content-center place-items-center pb-40 pt-0 '>
          <div className="mx-auto h-[550px]">
            <div className=' align-middle flex items-center justify-center  text-white py-14 text-4xl font-bold  uppercase'>
              <h1 className=' center'>Text Summarization </h1>
            </div>
            <div className='align-middle flex items-center justify-center '>
              <textarea placeholder='     Enter or paste your Text...'  className=' align-middle flex items-center justify-center  placeholder:text-black placeholder:font-semibold border-none outline-none  resize-none placeholder-px-12 opacity-40 rounded-lg h-72 sm:w-[900px]'>
              </textarea>
            </div>
            <div className=' align-middle flex items-center justify-center  center pt-10'>
              <button className=' border-none outline-none font-bold hover:shadow-xl shadow-white text-black font-sans text-xl hover:bg-slate-300  bg-white w-52 h-12  resize-none placeholder-px-12 opacity-40 rounded-lg'>
                Generate
              </button>
            </div>
          </div>
        </div>
            
    );
}

export default Textsum;
