import { Button, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import { format } from 'timeago.js';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addComment, deletePost, editPost, getAllPost } from '../../../features/post.reducers';
import { setgetAll, setgetusers } from '../../../features/users.reducers';
import ForumIcon from '@mui/icons-material/Forum';
// import '../../styles/home.scss'
import './card.scss'
import EditIcon from '@mui/icons-material/Edit';
import { dateParser, isempty } from '../../utils';
import CardComment from './cardComment';
import DeleteCard from './deleteCard';
import LikeButon from './likebuuton';
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SignalPost from './SignalPost';

const Listpost = ({ el,cle}) => {
     const userData = useSelector(state => state.user.user);
   const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("adinsiabdias@gmail.com");
   const [isLoading, setisloading] = useState(true);
   const [isUpdated, setUpdated] = useState(false);
   const [textUpdated, settextUpdated] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const [lireLaSuite, setLireLaSuite] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    
  }
  const LirePlus = () => {
    setLireLaSuite(!lireLaSuite)
  }
   const [text, setText] = useState("");
         const sendRquestUsers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_USER}`, {
      withCredentials: true
    })
      // .catch(err => console.log(err));
    const data = await res.data;
    return data;
    }
    const editRquest = async () => {
  await axios
            .put(`${process.env.REACT_APP_URL_POST}/${el?._id}`,
                
 {
 
  
  message : textUpdated
              }
 ).catch(error => {
   console.log(error)
     ;
  
  
            })
 
  }
   const updateItem = async () => {
    if (textUpdated) {
      editRquest().then(() => {
      dispatch(editPost())
    })
    }
  setUpdated(false)
   }
   //   const commenterId = user?._id
               const AddPostCommentRquest = async () => {
 const res =  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/comment-post/${el?._id}`,
                
 {
 
  commenterId : el.posterId,
 
     text,

              }
 ).catch(error => {
   console.log(error)
     ;

            })
                
    const data = await res.data;
    return data;
 
  }
    const handleComment = (e) => {
        e.preventDefault();
        
      //   if (text) {
           
            
      // }
      AddPostCommentRquest()
             .then(() => {
             dispatch(addComment())
             // console.log(data);
             })
            //  .then(() => dispatch(getAllPost()))
            //  .then(() => setText(''))
   }
  
   
   useEffect(() => {

     !isempty(users[0]) &&
       setisloading(false)
   }, [users]);


   return (

        <li className="card-container" key={el?._id}>
     
        <>
             <div className="card-left">
               {userData._id === el.posterId ? <NavLink to='/profil' key={el._id}> 
                 <img
              src={
                !isempty(users[0]) &&
                users
                  .map((user) => {
                    if (user?._id === el.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
                 
               </NavLink> :  <NavLink key={el._id} to={`/user_profil/${el.posterId}`} >
<img
              src={
                !isempty(users[0]) &&
                users
                  .map((user) => {
                    if (user?._id === el.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
                  </NavLink> }
             
            
             </div>
             <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
           
                <h3>
                 <span> {!isempty(users[0]) &&
                    users
                      .map((user) => {
                        if (user?._id === el.posterId) return user.nom;
                        else return null;
                      })
                         .join("")}</span> <span>
                       
                      {!isempty(users[0]) &&
                    users
                      .map((user) => {
                        if (user?._id === el.posterId) return user.prenom;
                        else return null;
                      })
                         .join("")} 
                   </span>
                   
                     {/* {
                      ( userData.email) === JSON.stringify(email) && <p>jjjj</p>
                      }
                       */}
                     {el.emailPoster === "adinsiabdias@gmail.com" &&  <span style={{ color: 'blue', marginLeft: '10px' }}>Ceo<CheckCircleIcon style={{ fontSize: 17}} /></span>}
                     {el.emailPoster !== 'adinsiabdias@gmail.com' && el.likers.length >= 20 && <span style={{ color: 'green', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 17 }} /></span>}
                     
                      {/* {el.emailPoster !== 'adinsiabdias@gmail.com' && el.likers.length<20 && <span style={{ color: 'red', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 17 }} /></span>}
                      */}
                   </h3>
                        <h3>
                  
                       </h3>
                           
                {/* {el.posterId !== userData?._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )} */}
              </div>
                 <span>    {
                   el.activitePost
              }
                      </span>
                 <span>{format(el.createdAt)}</span>
            </div>
               {isUpdated === false &&
                 <div>{el.message?.length > 300 ?
                 <div>
                   
                   
                     <>
                       {lireLaSuite === false &&
                         <p style={{textAlign:'justify'}} onClick={LirePlus}>{el.message.slice(0, 300)}
                           
                           {
                             
                             lireLaSuite === false &&
                         <>
                       
                           <span onClick={LirePlus} style={{ color: 'blue',cursor:'pointer' }}>... Voir plus</span>
                         </>
                           } 
                         </p>

                         
                     
                       
                       }

                       
                     
                    
                     </>
                   
                   
                   
                  
                   {lireLaSuite &&  <>
                      <p style={{textAlign:'justify'}} onClick={LirePlus}>  {lireLaSuite === false && el.message}</p>
                   <p style={{textAlign:'justify'}} onClick={LirePlus}>  {lireLaSuite && el.message}</p>
                   </>}
                   </div> : <>
                      <p  style={{textAlign:'justify'}} onClick={LirePlus}>  {lireLaSuite === false && el.message}</p>
                   <p style={{textAlign:'justify'}} onClick={LirePlus}>  {lireLaSuite && el.message}</p>
                   </>
               
               }</div>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={el.message}
                  onChange={(e) => settextUpdated(e.target.value)}
                />
                <div className="button-container">
                  <button style={{padding:'5px', color:'white',cursor:'pointer'}} className="btn" onClick={updateItem}>
                    Valider modification
                  </button>
                </div>
              </div>
            )}
               {
                 el.picture === "../posts/undefined" ? <p></p>: 
              <img src={el.picture} alt="card-pic" className="card-pic" />
            }
            {/* {el.video && (
              // <iframe
              //   width="500"
              //   height="300"
              //   src={el.video}
              //   frameBorder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
              //   title={el?._id}
              //    ></iframe>
                 
                 
                 <iframe
                   width="560" height="315" src={el.video} title={el?._id} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )} */}
            {userData?._id === el.posterId && (
              <div className="button-container">
                <div onClick={() => setUpdated(!isUpdated)}>
                  {/* <img src="./img/icons/edit.svg" alt="edit" />
                   */}
                     {/* <i style={{ color: 'white' }} className="fa-solid fa-pen-to-square"></i> */}
                   <EditIcon style={{ color: 'white' }} />
                </div>
                <DeleteCard el={el} />
              </div>
               )}
               <br></br>
               <div style={{}}>
               
               </div>
               
               {/* {el?.likers.length  > el?.signal.length 
                 
                && <LikeButon el={el} />  }
               {el?.likers.length < el?.signal.length 
                 
                && <SignalPost el={el} />  } 
               
               {el?.likers.length === el?.signal.length && 
                 <div onClick={()=>setClick(!click)} style={{ display: 'flex' }}>
                   
                   <LikeButon el={el} />
                   <div style={{marginLeft:'10px'}}>
                         <SignalPost el={el} />
                   </div>
               </div>
               } */}
                      <div onClick={()=>setClick(!click)} style={{ display: 'flex' }}>
                   
                   <LikeButon el={el} />
                   {/* <div style={{marginLeft:'10px'}}>
                         <SignalPost el={el} />
                   </div> */}
               </div>
               
               <div className="card-footer">
              <div className="comment-icon">
                {/* <img
                  onClick={() => setShowComment(!showComment)}
                  src="./img/icons/message1.svg"
                  alt="comment"
                /> */}
                   <ForumIcon
                  onClick={() => setShowComment(!showComment)}
                   style={{cursor:'pointer'}}
                   />
                <span>{el.comments.length}</span>
              </div>
             
              {/* <img src="./img/icons/share.svg" alt="share" /> */}
            </div>
                     {showComment && <CardComment el={el} />}
                     
             </div>
             
        
        </>
    
     </li>
     
       
    );
};

export default Listpost;