import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userChats } from '../../Api/chatrequest';
import { setgetUserChats } from '../../features/chats.reducers';
import Navbar from '../navigation/navbar';
import './chats.scss'
import Conversations from './Conversations';
import { io } from 'socket.io-client';

const Chats = () => {
  const socket = useRef(); 
    const dispatch = useDispatch();

 const user = useSelector(state => state.user.user);
  const chats = useSelector(state => state.chats.chats); 
  const [onlineUsers, setOnlineUsers] = useState([]);
  

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


   useEffect(() => {
      RequestUserChats().then((data) => {
        dispatch(setgetUserChats(data));
        
      });
    });

  // const [chats, setChats] = useState([]);
  // useEffect(() => {
  //   const getChats = async () => {
  //     try {
  //       const { data } = await userChats(user._id); 
  //       setChats(data); 
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getChats();
  // })
  const onlineStatut = (chat) => {
  const chatMembers = chat.members?.find((member)=>member !== user._id);
  const online = onlineUsers.find((user)=> user.userId === chatMembers)
  return online ? true : false
}
    return (
      <>
        {
          user && <>
            <Navbar />
               <div className='chatsMessage'>
          <div className="container clearfix">
    <div className="people-list" id="people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        <i className="fa fa-search"></i>
      </div>
    
    </div>
    
    {/* <div className="chat">
      <div className="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div className="chat-about">
          <div className="chat-with">Chat with Vincent Porter</div>
          <div className="chat-num-messages">already 1 902 messages</div>
        </div>
        <i className="fa fa-star"></i>
      </div> 
      
      <div className="chat-history">
        <ul>
          <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className="message other-message float-right">
              Hi Vincent, how are you? How is the project coming along?
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
              <span className="message-data-time">10:12 AM, Today</span>
            </div>
            <div className="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </li>
          
          <li className="clearfix">
            <div className="message-data align-right">
              <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
              <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              
            </div>
            <div className="message other-message float-right">
              Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
              <span className="message-data-time">10:20 AM, Today</span>
            </div>
            <div className="message my-message">
              Actually everything was fine. I'm very excited to show this to our team.
            </div>
          </li>
          
          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
              <span className="message-data-time">10:31 AM, Today</span>
            </div>
            <i className="fa fa-circle online"></i>
                        <i className="fa fa-circle online" style={{ color: "AED2A6"}}></i>
                        <i className="fa fa-circle online" style={{ color: "#DAE9DA" }}></i>
          </li>
          
        </ul>
        
      </div> 
      
      <div className="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                
        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>
        
        <button>Send</button>

      </div>
      
    </div>  */}
    
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
            {
              chats?.map((chat) => {
                return (
                  <Conversations online={onlineStatut(chat)} chat={chat} currentUser={user._id}  />
                )
              }).sort()
            }

          
          </>

          
      }
      </>
    );
};

export default Chats;