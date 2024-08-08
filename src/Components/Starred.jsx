import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import starred from '../assets/starred.svg'; // Ensure you have the appropriate starred image

function Starred() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
        <h1 className=' text-4xl self-start  pl-6 pt-4'>Bin</h1>
          <img src={starred} alt="starred" className='w-96' />
          <h1 className='text-2xl'>No starred files</h1>
          <p className='text-slate-950 text-lg text-center'>
            Add stars to things that you want to easily find later.
          </p>
        </div>
      </div>
    </>
  );
}

export default Starred;
