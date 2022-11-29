import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setgetUserChats } from '../../features/chats.reducers';
import Navbar from '../navigation/navbar';
import { format } from 'timeago.js';
import { io } from 'socket.io-client';
// import { isempty } from '../utils';
const Chatsbox = () => {
  const dispatch = useDispatch();
   const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const user = useSelector(state => state.user.user);
    //  const users = useSelector(state => state.users.users);
  const chats = useSelector(state => state.chats.chats);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [sendMessage,setSendMessage] = useState(null)
  const [recieveMessage, setRecieveMessage] = useState(null);
  const [online, setOnline] = useState([]);
  const scroll = useRef();

// console.log(newMessage);
  const [data, setData] = useState({});
    // const receiverId = chats.members?.find((id) => id !== user._id);
  const href = window.location.href;
  const chatId = href.slice(31, 55)
  // console.log(data);
  // console.log(words);
  const id = href.slice(56);
  // console.log(id);
      // Requète
  const RequestMessage = async () => {
     const res = await axios.post(`http://localhost:7500/api/message`, {
          text: newMessage,
          senderId: user._id,
          chatId : chatId
        }).catch((error) => {
          console.log(error);
        })
      const data = await res.data;
    return data;
  }
      const handleSend = async (e) => {
        e.preventDefault();

        RequestMessage().then((data) => {
          setMessages([...messages, data]);
          setNewMessage('')
       })
// Send message au serveur
        const receiverId = chats.members?.find((id) => id !== user._id);
        setSendMessage({...messages,receiverId})
}  

  const RequestUserChats = async () => {
    const res = await axios.get(
      `http://localhost:7500/api/chat/${user._id}`,
      {
        withCredentials: true, 
      }
    )
    .catch(err => console.log(err));
    const data = await res.data;
    return data;
    };
   const RequestUserMessage = async () => {
    const res = await axios.get(
      `http://localhost:7500/api/message/${chatId}`,
      {
        withCredentials: true,
      }
    )
    .catch(err => console.log(err));
    const data = await res.data;
    return data;
    };



      const sendRquest = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_USER}/${id}`, {
      withCredentials: true
    })
      // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
    // send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message',sendMessage)
    }
  }, [sendMessage])
  
  // Recieve message to socket Server

 
  useEffect(() => {
    socket.current = io('http://localhost:8800'); 
    socket.current.emit("new-user-add", user?._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      console.log(onlineUsers);
    });
  })

 useEffect(() => {
    socket.current.on('receive-message', (data) => {
       setRecieveMessage(data)
     })
  },[recieveMessage])
  useEffect(() => {
    sendRquest().then((data) => {
      setData(data)
      //  console.log(data)
    })
      
  });
  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId === chats._id) {
      setMessages([...messages,recieveMessage])
    }
  },[messages,recieveMessage,chats])
  useEffect(() => {
    RequestUserMessage().then((data) => {
      setMessages(data)
      //  console.log(messages)
    })
      
  });
       useEffect(() => {
      RequestUserChats().then((data) => {
        dispatch(setgetUserChats(data));
        
      });
       });
  
  // Allways Scroll 
  useEffect(() => {
    scroll.current?.scrollIntoView({behavior:"smooth"})
  },[messages])

   const onlineStatut = (chat) => {
  const chatMembers = chat.members?.find((member)=>member !== user._id);
  const online = onlineUsers.find((user)=> user.userId === chatMembers)
  return online ? true : false
  }
  useEffect(() => {
  onlineStatut(chats)
  })
    // console.log(chats);
    return  (
        <div>
            {
                user && 

          <>
            {
              chats ?   <>
                    <Navbar />
                   <NavLink to='/message'>Retour</NavLink>
                       <div className='chatsMessage'>
          <div className="container clearfix">
    <div className="people-list" id="people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        <i className="fa fa-search"></i>
      </div>
    
    </div>
    
    <div className="chat">
      <div className="chat-header clearfix">
    
        <div className="chat-about">
                          <div className="chat-with">Discussion avec {data.prenom}</div>
                          <p>{online ? <span>En Ligne</span> : <span>Déconnecté</span>}</p>
                          {/* <div className="chat-num-messages">already {messages.text?.length} 
                          </div> */}
        </div>
        <i className="fa fa-star"></i>
      </div> 
                  {
                        messages
                          // .slice(0, 5)
                          .map((message) => {
                      return (
                        <>
                         
                          <div style={{listStyleType : 'none',overflowY:'scroll'}} 
                            // ref={scroll}
                            className={message.senderId === user._id ? "chat-history" : "chat-history"}>
        <ul style={{listStyleType : 'none'}} >
          <li   className={message.senderId === user._id ? "clearfix":"clearfix"}>
            <div className={message.senderId === user._id ?"message-data align-right": "message-data"}>
                                  <span className="message-data-time" >{format(message.createdAt)}</span> &nbsp; &nbsp;
                                  <span className="message-data-name" >{message.senderId === user._id ? "Moi" : data.prenom}</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className={message.senderId === user._id ? "message other-message float-right" : "message my-message"}>
            {message.text}
            </div>
          </li>
          
          {/* <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
              <span className="message-data-time">10:12 AM, Today</span>
            </div>
            <div className="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </li> */}
          
       
          
      
          
          {/* <li>
        
            <i className="fa fa-circle online"></i>
                        <i className="fa fa-circle online" style={{ color: "AED2A6"}}></i>
                        <i className="fa fa-circle online" style={{ color: "#DAE9DA" }}></i>
          </li> */}
       
        </ul>
        
                          </div> 
                      </>
                       )
                     })
      }
    
      
                <div className="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3" value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} ></textarea>
{/*                 
        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i> */}
        
                    <button type='submit'
                      onClick={handleSend }
                    >Send</button>

      </div>
                  
      
    </div> 
    
  </div> 

{/* <script id="message-template" type="text/x-handlebars-template">
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time" >, Today</span> &nbsp; &nbsp;
      <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
    </div>
    <div className="message other-message float-right">
kytrut
    </div>
  </li>
</script>

<script id="message-response-template" type="text/x-handlebars-template">
  <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
      <span className="message-data-time">, Today</span>
    </div>
    <div className="message my-message">
      cxwxxwxvwx
    </div>
  </li>
</script> */}

        </div>
              </>
                : <p>Commencez par chatez</p>
          }
          </>
            }
        </div>
    );
};

export default Chatsbox;