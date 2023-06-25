import React from 'react'
import linkedin from "./linkedin.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import './Header.css';
import Headeroption from './Headeroption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Header() {
    const user = useSelector(selectUser);
    

  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src= {linkedin} alt="" height={30} />
            </div>
            <div className='header__search'>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type='text' placeholder='search'/>
                
            </div>


        </div>
        <div className='header__right'>
            <Headeroption Icon={ HomeIcon } title="Home"/>
            <Headeroption Icon={ PeopleIcon } title="My Network"/>
            <Headeroption Icon={ BusinessCenterIcon } title="Jobs"/>
            <Headeroption Icon={ MessageIcon } title="Messaging"/>
            <Headeroption Icon={ NotificationsIcon } title="Notification"/>
            <Headeroption avatar={ Avatar } title={user.displayName}/>

        </div>
      
    </div>
  )
}

export default Header
