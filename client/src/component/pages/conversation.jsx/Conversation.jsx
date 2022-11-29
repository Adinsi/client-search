import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setgetUnique } from '../../../features/user.reducers';
import '../chat/chat.css'

const Conversation = ({ chat, currentUser }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null)
         const RequestUserUnique = async () => {
           const userId = chat.members.find((id) => id !== currentUser);
          //  console.log(userId);
    const res = await axios.get(
      `${process.env.REACT_APP_URL_USER}/${userId}`,
      {
        withCredentials: true,
      }
    );
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    RequestUserUnique()
      .then((data) => {
    
        setgetUnique(setUserData(data))
      
   
    })
  })
    // console.log(userData);
  return (
      <>
       <div className="follower conversation">
        <div>
          
           <div className="online-dot">
          
        </div>
        <img src={userData === null ? "./uploads/profil/profil.png": userData?.picture} alt='user_profil' className='followerImage'
          style={{ width: '50px', height: '50px' }} />
        <div className="name" style={{fontSize:'0.8rem'}} >
          <span>{userData?.nom} {userData?.prenom}</span>
          <span>Online</span>
        </div>
      </div>
      
    </div>
    <hr></hr>
      </>
     
    );
};

export default Conversation;