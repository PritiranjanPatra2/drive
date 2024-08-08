import React, { useEffect, useState, useMemo } from 'react';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import ComputerIcon from '@mui/icons-material/Computer';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { Modal } from '@mui/material';
import { db, storage, serverTimestamp, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Sidebar({ triggerUpdate }) { 
    const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);
    const [usedStorage, setUsedStorage] = useState(0);
    const totalStorage = 1000 * 1024 * 1024 ;
    const user=auth.currentUser;

    useEffect(() => {
        async function fetchFiles() {
            const querySnapshot = await getDocs(collection(db, "myfiles"));
            console.log(querySnapshot);
            
            let totalSize = 0;
            querySnapshot.forEach(doc => {
                console.log(doc.data().size);
                totalSize += doc.data().size;
            });
            setUsedStorage(totalSize);
        }
        fetchFiles();
    }, [triggerUpdate]);
    

    function handleFile(e) {
        console.log(e.target.files);
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file|| !user) {
            alert("Please select a file first.");
            return;
        }

        setUploading(true);

        try {
            // Upload file
            const fileRef = ref(storage, `files/${file.name}`);
            const snapshot = await uploadBytes(fileRef, file);
            const url = await getDownloadURL(fileRef);
            // Add file information to Firestore
            await addDoc(collection(db, "myfiles"), {
                timestamp: serverTimestamp(),
                filename: file.name,
                fileURL: url,
                size: snapshot.metadata.size,
                uid:user.uid
            });
            setUsedStorage(prevUsedStorage => prevUsedStorage + snapshot.metadata.size);
            setUploading(false);
            setFile(null);
            setOpen(false);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Error uploading file: " + error.message);
            setUploading(false);
        }
    };

    const usedPercentage = useMemo(() => (usedStorage / totalStorage) * 100, [usedStorage, totalStorage]);

    return (
        <>
            <Modal open={open} onClose={() => setOpen(false)} 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='m-auto w-96 h-36 rounded bg-slate-500 p-4'>
                    <form onSubmit={handleUpload} className='flex justify-center items-center flex-col w-full h-full gap-4 text-white'>
                        <h3 className='font-bold '>Select the file you want to upload</h3>
                        <div>
                            {uploading ? <h3><CloudUploadTwoToneIcon/>Uploading...</h3> :
                                (<div className='flex justify-center items-center flex-col w-full h-full gap-4'>
                                    <input type="file" className='modal_file' onChange={handleFile} />
                                    <input type="submit" value="Upload" className='modal_submit bg-black py-2 px-4 rounded-2xl' />
                                </div>)
                            }
                        </div>
                    </form>
                </div>
            </Modal>

            <div className='sidebarContainer flex flex-col justify-between p-8   gap-4 h-full    mt-3.5 border-r-2'>
                <button className='flex justify-center items-center gap-1 shadow-md p-2 border rounded shadow-black w-2/4  outline-0 cursor-pointer' onClick={() => setOpen(true)}>
                    <AddTwoToneIcon />
                    <span>New</span>
                </button>
                <div>
                    <ul className='flex flex-col justify-center items-start gap-2 pt-4'>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/home'><HomeOutlinedIcon /> Home</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/drive'><DriveFolderUploadIcon />My Drive</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/computers'><ComputerIcon />Computers</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/shared'><PeopleIcon />Shared with me</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/home'><ScheduleIcon />Recent</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/starred'><StarBorderIcon />Starred</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/spam'><ErrorOutlineIcon />Spam</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/bin'><DeleteIcon />Bin</Link></li>
                        <li className='flex justify-center items-center gap-2 hover:bg-gray-200 cursor-pointer p-2 rounded'><Link to='/storage'><CloudOutlinedIcon />Storage</Link></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <div className='h-2 rounded-3xl bg-gray-300 w-full'>
                        <div className='bg-blue-600 h-full rounded-3xl' style={{ width: `${usedPercentage}%` }}></div>
                    </div>
                    <span>{(usedStorage / 1024 / 1024).toFixed(2)} MB of 1GB</span>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
