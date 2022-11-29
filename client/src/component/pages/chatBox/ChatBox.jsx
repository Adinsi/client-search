import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { setgetUnique } from '../../../features/user.reducers';
import { format } from 'timeago.js';
import InputEmoji from 'react-input-emoji';

import { useDispatch, useSelector } from 'react-redux';
import { setgetUserConversation } from '../../../features/message.reducers';


const ChatBox = ({ chat, currentUser, setSendMessage }) => {
  const userMessage = useSelector(((state) => state.messages.messages))
  const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
    const [message,setMessage] = useState([])
  const [newMessage, setNewMessage] = useState("");
  const handleChange = (newMessage) => {
    setNewMessage(newMessage)
  }
     const messages = {
      senderId: currentUser,
      text: newMessage,
      chatId : chat?._id
    }
  const sendRquest = async () => {
   
 const res =  await axios
            .post(`http://localhost:7500/api/message`,
                
 
 
messages
          
 ).catch(error => {
  //  console.log(error.response.data.message)
   
   
     ;

     
   

            })
                
    const data = await res.data;
    return data;
}
  const handleSend = (e) => {
    e.preventDefault();
    sendRquest().then((data) => {
     dispatch(setgetUserConversation(data))
      ;
     
    })
    
//       .then(() => {
//       const receiverId = chat.members.find((id) => id !== currentUser); 
//       setSendMessage(receiverId)
//  })

    // Send message to db
 
    
  }
         const RequestUserUnique = async () => {
           const userId = chat?.members?.find((id) => id !== currentUser);
        //    console.log(userId);
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
    const RequestUserMessage = async () => {
    const res = await axios.get(
      `http://localhost:7500/api/message/${chat?._id}`,
      {
        withCredentials: true,
      }
    );
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    RequestUserMessage().then((data)=>{
      setMessage(data)
    })
  })
    
    useEffect(() => {
       
         RequestUserUnique()
      .then((data) => {
    
        setgetUnique(setUserData(data))
        //   setUserData(data);
        //   console.log(userData);
      
   
    })
    }) 
  // console.log(message);
  
    return ( 
        <>
        {chat?      <div style={{position:'absolute',top:'100px',right:'0px'}}>
            <>
                <div className="ChatBox-container">
                    <>
                        <div className="chat-header">
                            <div className="follower">
                                  <div>
          
          
        <img src={userData === null ? "./uploads/profil/profil.png": userData?.picture} alt='user_profil' className='followerImage'
          style={{ width: '50px', height: '50px' }} />
        <div className="name" style={{fontSize:'0.8rem'}} >
          <span>{userData?.nom} {userData?.prenom}</span>
       
        </div>
      </div>
      
                        </div>
                        </div>
                        <hr></hr>
                    </>
                    
                    </div>
                    <div className="chat-body">
              {userMessage?.map((message) => {
                return (
                  <>
                    <div className={message?.senderId === currentUser ? "message own" : "message"}>
                      <span>{message?.text}</span>
                      <span>{format(message?.createdAt)}</span>
                      
                </div>
                  </>
            )
          })}
              
            </div>
            <div className="chat-sender">
              <div>
                +
              </div> 
              <input type='text'  value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
              {/* <InputEmoji  value={newMessage} onChange={handleChange} /> */}
              <div className="sender-button button" onClick={handleSend} style={{cursor:'pointer'}}  >
send
              </div>
            </div>
            </>
        </div> : <span>Commencer un nouveau message</span>}
        </>
    );
};

export default ChatBox;