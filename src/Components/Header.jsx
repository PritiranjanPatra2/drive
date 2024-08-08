import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppGuide from './AppGuide';
import { Modal, Box, Menu, MenuItem, Avatar } from '@mui/material';
import { authContext } from './Context';

function Header() {
  const { searchQuery, setSearchQuery,  photoURL, handleLogout, sortAscFilesByDate, sortDescFilesByDate,  sortAscFilesByName,  sortDescFilesByName  } = useContext(authContext);
  const [showGuide, setShowGuide] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-mode');
  const [anchorElSettingMenu, setAnchorElSettingMenu] = useState(null);
  const [anchorFileMenu, setAnchorFileMenu] = useState(null);
  const [anchorProfileMenu, setAnchorProfileMenu] = useState(null);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleHelpClick = () => {
    setShowGuide(true);
  };

  const handleClose = () => {
    setShowGuide(false);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setAnchorEl(null);
  };

  return (
    <>
      <Modal open={showGuide} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600,bgcolor: 'background.paper',boxShadow: 24, p: 4,borderRadius: 10}}>
          <AppGuide />
        </Box>
      </Modal>

      <div className={`w-full h-16 flex justify-between items-center ${theme}`}>
        <div className='logo flex justify-start gap-2 items-center pl-6'>
          <img src={logo} alt='logo' className='w-10 ' />
          <h1 className='text-3xl '>Drive</h1>
        </div>

        <div className='flex justify-start gap-5 items-center pl-6 bg-slate-300 p-2 rounded text-gray-500'>
          <SearchIcon  />
          
          <input
            type="text"
            placeholder='Search in drive'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-96 bg-slate-300 border-0 outline-0'
          />
          <FormatAlignCenterIcon onClick={(event) => setAnchorFileMenu(event.currentTarget)}/>
          <Menu
            id="files-sort"
            anchorEl={anchorFileMenu}
            open={Boolean(anchorFileMenu)}
            onClose={() => setAnchorFileMenu(null)}
          >
            <MenuItem onClick={sortAscFilesByName}>Name Ascending</MenuItem>
            <MenuItem onClick={sortDescFilesByName}>Name Descending</MenuItem>
            <MenuItem onClick={sortAscFilesByDate}>Date Ascending</MenuItem>
            <MenuItem onClick={sortDescFilesByDate}>Date Descending</MenuItem>

          </Menu>
        </div>

        <div className='flex justify-start gap-5 items-center pr-6 text-gray-600'>
          <HelpOutlineIcon onClick={handleHelpClick} />
            <SettingsOutlinedIcon
              onClick={(event) => setAnchorElSettingMenu(event.currentTarget)}
              aria-controls={Boolean(anchorElSettingMenu) ? 'theme-menu' : undefined}
              aria-haspopup="true"
            />
          <Menu
            id="theme-menu"
            anchorEl={anchorElSettingMenu}
            open={Boolean(anchorElSettingMenu)}
            onClose={() => setAnchorElSettingMenu(null)}
          >
            <MenuItem onClick={() => handleThemeChange('light-mode')}>Light Mode</MenuItem>
            <MenuItem onClick={() => handleThemeChange('dark-mode')}>Dark Mode</MenuItem>
            <MenuItem onClick={() => handleThemeChange('system')}>System Default</MenuItem>
          </Menu>
       

          <div>
            <Avatar 
              src={photoURL} 
              onClick={(event) => setAnchorProfileMenu(event.currentTarget)}
              aria-controls={Boolean(anchorProfileMenu) ? 'profile-menu' : undefined}
              aria-haspopup="true" className='hover:cursor-pointer border-white border-2'
            />
            <Menu
              id="profile-menu"
              anchorEl={anchorProfileMenu}
              open={Boolean(anchorProfileMenu)}
              onClose={() => setAnchorProfileMenu(null)}
            > 
              <MenuItem className='font-bold'>My Account</MenuItem>
              <MenuItem onClick={handleLogout} ><p className='text-red-500'>Log Out</p></MenuItem>
            </Menu>
          </div>
        </div>
        
      </div>
      <hr />
    </>
  );
}

export default Header;
