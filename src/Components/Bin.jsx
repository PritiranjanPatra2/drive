import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import bin from '../assets/bin.svg'; 

function Bin() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
        <h1 className=' text-4xl self-start'>Bin</h1>
          <img src={bin} alt="bin" className='w-96' />
          <h1 className='text-2xl'>Nothing in the bin</h1>
          <p className=' text-lg text-center'>
            Move items that you don't need to the bin. Items in the bin will be deleted forever after 30 days.
          </p>
          <a href='https://drive.google.com/drive/trash' className='text-blue-600'>Learn more</a>
        </div>
      </div>
    </>
  );
}

export default Bin;
