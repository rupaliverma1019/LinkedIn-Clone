import React, { useEffect } from 'react';
import Header from './Header';
import './App.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        auth.onAuthStateChanged((userAuth)=>{
            if(userAuth)
            {
                dispatch(loginuser({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    photoURL: userAuth.photoURL,
                    displayName:userAuth.displayName
                  }))
            }
            else{
                dispatch(logoutuser());
            }
        })
    },[])

    return ( 
        <>
        {
            !user ? (<Login/>) :(
                <div className='app_wrapper'>
                <Header/>
                <div className='app_body'>
                <Sidebar/>
                <Feed></Feed>
                <Widget/>
                
                 </div>
                </div>
            )
        }
        
        </>
    );
}

export default App;