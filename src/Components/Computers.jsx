import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import computers from '../assets/computer.svg'; 

function Computers() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col justify-center items-center gap-2 w-full h-full'>
          <h1 className='text-4xl self-start ml-4  pl-6 pt-4'>Computers</h1>
          <img src={computers} alt="computers" className='w-96 mt-4' />
          <h1 className='text-2xl'>No folders syncing with Drive</h1>
          <p className='text-slate-950 text-lg text-center'>
            Folders on your computer that you sync with Drive using Drive for desktop will show up here. <a href="https://support.google.com/drive/answer/10838124?visit_id=638585991074382315-2321317531&p=empty_state_computers_web&rd=1" target='_blank' className='text-blue-600'>Learn more</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Computers;
