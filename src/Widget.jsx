import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import './Widget.css'
import image from './Image/sideimage.png'
const Widget = () => {
  return (
    <div className='widget'>
      <div className='widget_profile_info'>
        <div className='header_footer'>
        <div className='header'>
          <p style={{marginTop:"2px"}}>Edit public profile & URL</p>
          <HelpIcon/>
          </div>
          <div className='footer'>
          <p>Add Profile in another Language</p>
          <HelpIcon />
          </div>
          </div>
          <div className='widget_profile_mid'>
          <img src={image} alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Widget
