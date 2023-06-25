import React from 'react';
import background from './photo-1542831371-29b0f74f9713.jpeg'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className='sidebar' >
        <div className='sidebar__profile'>
            <img src={background} alt=''  />
            <div className='profile__details'>
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
                <p>Web Developer</p>
            </div>
            <div className='profile__stats'>
                <span>Who viewed your profile</span>
                <span className='stat__number'>20</span>
            </div>

            <div className='profile__stats'>
              <span>Connections<br/><strong>Grow your Network</strong></span>
              <span className='stat__number'>150</span>

            </div>

        </div>
        <div className='sidebar__recent'>
          <p>Recent</p>
          <p className='hash'><span>#</span>Branding</p>
          <p className='hash'><span>#</span>Marketing</p>
          <p className='hash'><span>#</span>Web Development</p>
          <p className='hash'><span>#</span>Programming</p>
          <p className='hash'><span>#</span>ReactJs</p>
        </div>
      
    </div>
  )
}

export default Sidebar
