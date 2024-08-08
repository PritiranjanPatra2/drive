import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import drive from '../assets/drive.svg';

function Drive() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full '>
                    <h1 className=' text-4xl self-start pl-6 pt-4'>My Drive</h1>
                    <img src={drive} alt="home" className='w-96' />
                    <h1 className=' text-2xl'>Welcome to Drive, the home for all your files</h1>
                    
                </div>
      </div>
      
    </>
  );
}

export default Drive;
