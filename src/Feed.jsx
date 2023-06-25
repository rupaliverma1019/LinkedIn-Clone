import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import NotesIcon from '@mui/icons-material/Notes';
import Post from './Post';
import photo from "./Image/Snapchat-327245113.jpg"
import { db } from "./firebase"
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



const Feed = () => {
    const user = useSelector(selectUser)
    const[posts,setPost] = useState([]);
    const[input, setInput] = useState();
    const submitPost = (e) =>{
        e.preventDefault();
        db.collection("posts").add({
            name:user.displayName,
            description:"",
            photoURL:user.photoURL,
            message : input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        });
        setInput("");

    }
    useEffect(() =>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPost(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    }, [])
    
  return (
    <div className='feed'>
        <div className='feed__header'>
        <div className='feed__input'>
            <Avatar src={user.photoURL} />
            <form onSubmit={submitPost} >
            <input type='text' placeholder='Start a post' value={input} onChange={e=>setInput(e.target.value)} ></input>
            <input type='submit'/>
            </form>
            </div>
        <div className='feed__options'>
            <div className='option'>
                
                <PhotoIcon style={{"color": "rgb(200, 106, 218)"}}/>
                <span>Photo</span>
                </div>
            
            <div className='option'>
            
                <VideocamIcon style={{"color": "green"}}/>
                <span>Video</span>
            </div>
            
            <div className='option'>
            
                <EventIcon style={{"color": "red"}}/>
                <span>Event</span>
            </div>
            
            <div className='option'>
            
                <NotesIcon style={{"color": "orange"}}/>
                <span>Write Article</span>
                </div>
            </div>
        </div>
        
        {
            posts.map(({id,data: {name,description,message,photoURL}})=> {
                return <Post  key={id} name={name} description={description} message={message} photoURL={user.photoURL}/>
        
            })
        }
        
        
    
    
    </div>
        
    
  )
}

export default Feed