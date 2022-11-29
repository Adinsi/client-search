import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../Api/chatrequest';
import { setgetUserConversation } from '../../features/message.reducers';
import { setgetUnique } from '../../features/user.reducers';
import { setgetusers } from '../../features/users.reducers';
import './chats.scss'

const Conversations = ({ chat, currentUser,online }) => {
    const dispatch = useDispatch();
    const [usersData, setUsersData] = useState(null);
    // const usersData   = useSelector(state => state.messages.messages);

    // Resquest
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
          RequestUserUnique().then((data) => {
    
setUsersData(data)
        
      
   
    })
    })

 
  
    return (
//            <div className='chatsMessage'>
//           <div className="container clearfix">
//     <div className="people-list" id="people-list">
    
//       <ul className="list" style={{listStyleType : 'none'}}  >
//         <li className="clearfix">
//           <img src={'./uploads/profil/profil.png'}alt="avatar" />
//           <div className="about">
//             <div className="name">Vincent Porter</div>
//             <div className="status">
//               <i className="fa fa-circle online"></i> online
//             </div>
//           </div>
//         </li>
        
//         <li className="clearfix">
//           <img src={'./uploads/profil/profil.png'} alt="avatar" />
//           <div className="about">
//             <div className="name">Aiden Chavez</div>
//             <div className="status">
//               <i className="fa fa-circle offline"></i> left 7 mins ago
//             </div>
//           </div>
//         </li>
        
    
//       </ul>
//     </div>
    
//     {/* <div className="chat">
//       <div className="chat-header clearfix">
//         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
//         <div className="chat-about">
//           <div className="chat-with">Chat with Vincent Porter</div>
//           <div className="chat-num-messages">already 1 902 messages</div>
//         </div>
//         <i className="fa fa-star"></i>
//       </div>
      
//       <div className="chat-history">
//         <ul>
//           <li className="clearfix">
//             <div className="message-data align-right">
//               <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
//               <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              
//             </div>
//             <div className="message other-message float-right">
//               Hi Vincent, how are you? How is the project coming along?
//             </div>
//           </li>
          
//           <li>
//             <div className="message-data">
//               <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//               <span className="message-data-time">10:12 AM, Today</span>
//             </div>
//             <div className="message my-message">
//               Are we meeting today? Project has been already finished and I have results to show you.
//             </div>
//           </li>
          
//           <li className="clearfix">
//             <div className="message-data align-right">
//               <span className="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
//               <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
              
//             </div>
//             <div className="message other-message float-right">
//               Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
//             </div>
//           </li>
          
//           <li>
//             <div className="message-data">
//               <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//               <span className="message-data-time">10:20 AM, Today</span>
//             </div>
//             <div className="message my-message">
//               Actually everything was fine. I'm very excited to show this to our team.
//             </div>
//           </li>
          
//           <li>
//             <div className="message-data">
//               <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//               <span className="message-data-time">10:31 AM, Today</span>
//             </div>
//             <i className="fa fa-circle online"></i>
//                         <i className="fa fa-circle online" style={{ color: "AED2A6"}}></i>
//                         <i className="fa fa-circle online" style={{ color: "#DAE9DA" }}></i>
//           </li>
          
//         </ul>
        
//       </div>
      
//       <div className="chat-message clearfix">
//         <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                
//         <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
//         <i className="fa fa-file-image-o"></i>
        
//         <button>Send</button>

//       </div>
      
//     </div>  */}
    
//   </div>

// {/* <script id="message-template" type="text/x-handlebars-template">
//   <li className="clearfix">
//     <div className="message-data align-right">
//       <span className="message-data-time" >, Today</span> &nbsp; &nbsp;
//       <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
//     </div>
//     <div className="message other-message float-right">
// kytrut
//     </div>
//   </li>
// </script>

// <script id="message-response-template" type="text/x-handlebars-template">
//   <li>
//     <div className="message-data">
//       <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
//       <span className="message-data-time">, Today</span>
//     </div>
//     <div className="message my-message">
//       cxwxxwxvwx
//     </div>
//   </li>
// </script> */}

//         </div>
        <NavLink key={chat._id}  to={`/chat-box/${chat._id}/${usersData?._id}`}>
 <div className='chatsMessage'>
            <div className="container clearfix">
                <div className="people-list" id="people-list">
                    
               <ul className="list" style={{listStyleType : 'none'}}  >
         <li className="clearfix">
           <img width="80px" height='80px' style={{borderRadius:'50%'}} src={usersData ? usersData.picture : './uploads/profil/profil.png'}alt="avatar" />
           <div className="about">
             <div className="name">{usersData?.nom} {usersData?.prenom}</div>
                    <div className="status">
                      {online ? <p>En ligne</p> : <p>Déconnecté</p>}
{/*           
               <i className="fa fa-circle online"></i> */}
             </div>
           </div>
         </li>
      
        
    
       </ul>
</div>
            </div>
        
        </div>

        </NavLink>
       
    );
};

export default Conversations;