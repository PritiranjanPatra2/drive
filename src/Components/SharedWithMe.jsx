import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import shared from '../assets/shared.svg'; 

function SharedWithMe() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
          <h1 className='text-4xl self-start ml-4'>Shared with Me</h1>
          <img src={shared} alt="shared" className='w-96 mt-4' />
          <h1 className='text-2xl'>No files shared with you</h1>
          <p className=' text-lg text-center'>
            Files that others share with you will show up here. <a href="#" className='text-blue-600'>Learn more</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SharedWithMe;
