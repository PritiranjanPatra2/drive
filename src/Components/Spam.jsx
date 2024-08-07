import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import spam from '../assets/spam.svg'; // Ensure you have the appropriate spam image

function Spam() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
          <h1 className='text-4xl self-start ml-4'>Spam</h1>
          <div className='bg-gray-200 p-4 w-full text-center'>
            Files in spam won't appear anywhere else in Drive. Files are permanently removed after 30 days.
          </div>
          <img src={spam} alt="spam" className='w-96 mt-4' />
          <h1 className='text-2xl'>Your spam is empty</h1>
          <p className='text-slate-950 text-lg text-center'>
            Files in spam won't appear anywhere else in Drive. Files are permanently removed after 30 days.
          </p>
        </div>
      </div>
    </>
  );
}

export default Spam;
