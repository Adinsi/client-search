// import { Button, TextareaAutosize } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editPost, getAllPost } from '../../../features/post.reducers';
import '../../styles/userprofil.scss';
// import { dateParser, isempty } from '../../utils';
// import CardComment from '../home/cardComment';
// import DeleteCard from '../home/deleteCard';
// import LikeButon from '../home/likebuuton';
// import Postprofil from '../profil/postprofil';
// import LikeButonUser from './LikebuttonUser';
// import DeleteCardUser from './DeleteCardUser';
import {  setgetusers } from '../../../features/users.reducers';
import {  setgetUsers } from '../../../features/user.reducers';
import '../home/card.scss'
import { getAllPostAlls } from '../../../features/allposts.reducers';
import Navbar from '../../navigation/navbar';
import './userprofil.scss'
import Notfound from '../notfound';
// import { setgetUserChats } from '../../../features/chats.reducers';

const UserProfil = () => {
  const chats = useSelector(state => state.chats.chats); 
 const history = useNavigate();
  // const [showComment, setShowComment] = useState(false)
  // const [isUpdated, setUpdated] = useState(false);
  //  const [textUpdated, settextUpdated] = useState(null);
      
        const user = useSelector((state)=>state.user.user)
      // const users = useSelector((state)=>state.users.users)
      // const allPosts = useSelector((state) => state.allposts.allposts);
      const dispatch = useDispatch();
  
    const [data, setData] = useState({});
    // const [dataPost, setDataPost] = useState([]);
  
        const href = window.location.href;
  const id = href.slice(34);

  const RequestUserChats = async () => {
    const res = await axios.post(`http://localhost:7500/api/chat`, {
      senderId : user._id,
    receiverId
 : data._id
    }
     ).catch((error) => {
          console.log(error);
        })
      // .catch(err => console.log(err));
    const datas = await res.data;
    return datas;
  }

  const Chats = () => {
    if (chats.members?.find((id) => id === data._id)) {
  return  history('/message')
}
   else return   RequestUserChats().then((data) => {
      // dispatch(setgetUserChats(data));
    })
    
    
  }
   const sendRquest = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_USER}/${id}`, {
      withCredentials: true
    })
      // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
//        const editRquest = async () => {
//   await axios
//             .put(`${process.env.REACT_APP_URL_POST}/${id}`,
                
//  {
 
  
//   message : textUpdated
//               }
//  ).catch(error => {
//    console.log(error)
//      ;
  
  
//             })
 
//   }
  //  const updateItem = async () => {
  //   if (textUpdated) {
  //     editRquest().then(() => {
  //     dispatch(editPost())
  //   })
  //   }
  // setUpdated(false)
  // }
   const sendRquestUsers = async () => {
      const res = await axios
        .get(`${process.env.REACT_APP_URL_USER}`, {
          withCredentials: true,
        })
        // .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
      const sendRquestPost = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_POST}`, {
      withCredentials: true

    })
      // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
     const sendRquestUser = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_URL_USER}/jwt`,
      {
        withCredentials: true,
      }
    );
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  };
     useEffect(() => {
        sendRquestUser().then((data) => {
          dispatch(setgetUsers(data.user));

          // console.log(data);
    });
     },[dispatch])
  
   useEffect(() => {
      sendRquestUsers().then((data) => {
        dispatch(setgetusers(data));
        
      });
   });
    useEffect(() => {
  
          sendRquestPost().then((data) => {
        dispatch(getAllPostAlls(data));
         
          
        
          });
      



    
    });
      useEffect(() => {
         sendRquest().then((data) => {
            setData(data)
            //  console.log(data)
    })
      
      })
    
   
   console.log(chats.members)
  
    
  return (
    user ? <>
       <Navbar /> 
        <>
   {
        data ?     <div className='userProfil'>
     
    
           <div className="row py-5 px-4">
   <div className="card-container">
	
	<img className="round" src={data.picture} width='40px' alt="user" />
	<h3>{data.nom}</h3>
	<h6>{data.prenom}</h6>
	<p>{data.activite}<br/> à  {data.quartier}</p>
                <div className="buttons">
                  
                  {
                    data.quartier === user.quartier ? <button onClick={Chats} className="primary"> 	Message
                  </button>
                    : <button className="primary">Ce membre n'est pas dans votre zone</button>
		}
{/* 	
		<button className="primary ghost">
			Following
		</button> */}
	</div>

</div>



    </div>
</div> :<p>Chagement</p>
      }
        </>
        
      
    </> : <Notfound/>
  
   
         
               
            
         
       
   
    );
};

export default UserProfil;