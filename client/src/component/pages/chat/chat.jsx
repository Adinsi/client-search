import React,{useEffect, useRef, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../navigation/navbar';
import axios from 'axios';
import { setgetUsers } from '../../../features/user.reducers';
import './chat.css'
import Inputsearch from './inputSearch';
import { setgetUserChats } from '../../../features/chats.reducers';
import Conversation from '../conversation.jsx/Conversation';
import ChatBox from '../chatBox/ChatBox';
import {io} from 'socket.io-client'
axios.defaults.withCredentials = true;

const Chat = () => {
      const user = useSelector(state => state.user.user);
      const chats = useSelector(state => state.chats.chats);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  
  const socket = useRef()
    const dispatch = useDispatch();
   
   
    

    
  //   const sendRquest = async () => {
  //   const res = await axios.get(
  //     `${process.env.REACT_APP_URL_USER}/jwt`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   // .catch(err => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  
       const RequestUserChats = async () => {
    const res = await axios.get(
      `http://localhost:7500/api/chat/${user._id}`,
      {
        withCredentials: true,
      }
    );
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
    };
    
    // useEffect(() => {
    //     sendRquest().then((data) => {
    //   dispatch(setgetUsers(data.user));
    // });
    // })
  // useEffect(() => {
  //   socket.current = io('http://localhost:8800'); 
  //   socket.current.emit("new-user-add", user._id);
  //   socket.current.on("get-users", (users) => {
  //     setOnlineUsers(users)
  //     console.log(onlineUsers);
  //   });
  // }, [user])
  
     useEffect(() => {
      RequestUserChats().then((data) => {
        dispatch(setgetUserChats(data));
        
      });
    });

    return (
        <>
            {user
                &&  
                <>
                    
                    <Navbar />
                    <br></br>
                    <div className="Chat">
                        {/* Left side */}
                        <div className="Left-side-chat">
                            <Inputsearch />
                            <div className="Chat-container">

                            <h2>Chats</h2>
                                <div  className="Chat-list">
                                    
                  {chats?.map((chat) => {
                    return (
                      <div onClick={()=>setCurrentChat(chat)}>
                          <Conversation chat={chat} currentUser={user._id} />
                      </div>
                                      )
                            
                          })}
                  
                
                            </div>
                            </div> 
                        </div>
                        {/* Right side */}
                        <div className="Right-side-chat" >

            </div>
            {/* ChatBox */}
          
          </div>
            <ChatBox  chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} />
               </>
        }
        </>
    );
};

export default Chat;