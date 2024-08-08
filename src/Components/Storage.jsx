import React, { useEffect, useMemo, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from './Header';
import Sidebar from './Sidebar';

function Storage() {
    const [usedStorage, setUsedStorage] = useState(0);
    const totalStorage = 1 * 1024 * 1024 * 1024; 

    useEffect(() => {
        async function fetchFiles() {
            const querySnapshot = await getDocs(collection(db, "myfiles"));
            let totalSize = 0;
            querySnapshot.forEach(doc => {
                totalSize += doc.data().size;
            });
            setUsedStorage(totalSize);
        }
        fetchFiles();
    }, []);

   
    const usedPercentage = useMemo(() => (usedStorage / totalStorage) * 100, [usedStorage,totalStorage  ]);

    return (
        <>  <Header />
       <div className="flex">
       <Sidebar />
       <div className='p-8 w-full '>
        <h1 className='text-2xl font-semibold '>Storage</h1>
        <div className='flex justify-between items-center mt-4'>
            <div className='flex items-center gap-4'>
                <span>Type</span>
                <span>Modified</span>
            </div>
            <div>
                <a href="#" className='text-blue-600'>Backups</a>
            </div>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <div className='text-3xl font-bold'>{(usedStorage / ( 1024 * 1024)).toFixed(2)} MB of 1GB used</div>
            
        </div>
        <div className='w-full bg-gray-200 rounded-full mt-2'>
            <div className='bg-blue-600 h-2 rounded-full' style={{ width: `${usedPercentage}%` }}></div>
        </div>
    </div>
       </div>
       </>
    );
}

export default Storage;
