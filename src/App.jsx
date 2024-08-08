import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import { authContext } from './Components/Context';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import { auth, provider, onAuthStateChanged } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import Login from './Components/Login';
import Drive from './Components/Drive';
import Bin from './Components/Bin';
import Starred from './Components/Starred';
import Spam from './Components/Spam';
import Computers from './Components/Computers';
import SharedWithMe from './Components/SharedWithMe';
import Storage from './Components/Storage';
import Chatbot from './Components/Chatbot';

function App() {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPhotoURL(currentUser.photoURL);
      } else {
        setUser(null);
        setPhotoURL(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  function signIn() {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
        setPhotoURL(user.photoURL);
       
        
        navigate('/Home');
      })
      .catch((err) => alert(err.message));
  }

  function handleLogout() {
    signOut(auth)
      .then(() => {
        alert('You have been logged out.');
        navigate('/');
      })
      .catch((err) => alert(err.message));
  }

  function sortAscFilesByName() {
    setFiles(files => [...files].sort((a, b) => a.data.filename.localeCompare(b.data.filename)));
  }

  function sortDescFilesByName() {
    setFiles(files => [...files].sort((a, b) => b.data.filename.localeCompare(a.data.filename)));
  }

  function sortAscFilesByDate() {
    setFiles(files => [...files].sort((a, b) => new Date(a.data.timestamp.seconds * 1000) - new Date(b.data.timestamp.seconds * 1000)));
  }

  function sortDescFilesByDate() {
    setFiles(files => [...files].sort((a, b) => new Date(b.data.timestamp.seconds * 1000) - new Date(a.data.timestamp.seconds * 1000)));
  }

  if (loading) {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-gray-100'>
            <div className='flex flex-col items-center'>
                <div className='ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4'></div>
                <p className='text-lg font-semibold text-gray-700'>Loading...</p>
            </div>
        </div>
    );
}

  return (
    <authContext.Provider value={{ files, setFiles, searchQuery, setSearchQuery, signIn, photoURL, handleLogout, sortAscFilesByDate, sortDescFilesByDate, 
      sortAscFilesByName,  sortDescFilesByName  }}>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/drive' element={<ProtectedRoute><Drive/> </ProtectedRoute> }/>
        <Route path='/bin' element={<ProtectedRoute><Bin/></ProtectedRoute>}/>
        <Route path='/starred' element={<ProtectedRoute><Starred/></ProtectedRoute>}/>
        <Route path='/spam' element={<ProtectedRoute><Spam/></ProtectedRoute>}/>
        <Route path='/computers' element={<ProtectedRoute><Computers/></ProtectedRoute>}/>
        <Route path='/shared' element={<ProtectedRoute><SharedWithMe/></ProtectedRoute>}/>
        <Route path='/storage' element={<ProtectedRoute><Storage/></ProtectedRoute>}/>
        
      </Routes>
      <Chatbot />
    </authContext.Provider>
  );
}

export default App;
