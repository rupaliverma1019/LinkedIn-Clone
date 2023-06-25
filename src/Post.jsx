import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import SendIcon from '@mui/icons-material/Send';
import Counter from './Counter';
import { useState } from 'react';

const Post = forwardRef(({name, description, message , photoURL} , ref) => {
  const[count, setCount] = useState(0);
  return (
    <div className='posts'>
      <div className='post__header'>
          <div className='post__headerLeft'>
            <Avatar src={photoURL}/>
            <div className='post_profile_details'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
          </div>
          <MoreHorizIcon/>
      </div>
      <div className='post__body'>
          <p>{message}</p>
      </div>
      <div className='footer'>
      <div className='option'>
            <ThumbUpIcon/>
            
            <span onClick={() => setCount(count + 1)}>Like</span>
            <p>{count}</p>
            {/* <Counter/> */}
        </div>
        <div className='option'>
            <CommentIcon/>
            <span>Comment</span>
        </div>
        <div className='option'>
            <RepeatOnIcon/>
            <span>Repost</span>
        </div>
        <div className='option'>
            <SendIcon/>
            <span>Send</span>
        </div>

      </div>
    </div>
  )
}

)

export default Post
