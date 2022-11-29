/* eslint-disable array-callback-return */
import { Button, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment,getAllPost } from '../../../features/post.reducers';
import { isempty} from '../../utils';
import EditDeleteComment from './editDeleteComment';
import SendIcon from '@mui/icons-material/Send';

import './cardComment.scss'

const CardComment = ({ el }) => {
    const [text,setText] = useState('')
       const user = useSelector(state => state.user.user);
   const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const commenterId = user._id
               const AddPostCommentRquest = async () => {
 const res =  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/comment-post/${el._id}`,
                
 {
 
  commenterId ,
 
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
        
        if (text) {
           
            
            AddPostCommentRquest()
                   .then(() => {
                   dispatch(addComment())
                   // console.log(data);
                   })
                   .then(() => dispatch(getAllPost()))
                setText('')
        }
}
  
    return (
        <div className='cardComment' style={{minHeight:'auto',maxHeight:'400px',overflowY:'scroll',position:'relative' }}>
   <br></br>
            {
                el.comments.map((comment) => {
                    return (
                     
                       <div
                          key={comment._id} style={{marginLeft:'px'}} >
                          <div style={{display:'flex',alignItems:'flex-start',alignContent:'flex-start'}}>
                             
                              <img style={{borderRadius:'100%'}} width={35} height={35} src={  !isempty(users[0]) && users.map((user) => {
                                                   if(user._id === comment.commenterId) return  user.picture
                                                   
                                                else return null
                                                }).join('')
                                                } alt='Picture_profil' /> 
                             <span style={{marginLeft:'10px',textDecoration:'underline',color:'gray'}}>
                                
                                  {  !isempty(users[0]) && users.map((user) => {
                                                   if (user._id === comment.commenterId) return user.prenom
                                                })
                                } 
                                
                             </span>
                             <span style={{marginLeft:'10px',textDecoration:'underline',color:'gray'}}>
                                 {  !isempty(users[0]) && users.map((user) => {
                                                   if (user._id === comment.commenterId) return user.nom
                                                })
                                                }  

                             </span>
                             
                             {/* <span>
                                {timestamParser(comment.timestamp)} 

                             </span> */}
                          </div>
                          <div style={{  width: '100%'}} >
                             
                          <h6 style={{textAlign:'justify',lineHeight:'25px',fontWeigh:'bolder',fontSize:'1.1rem'}} >
                              {comment.text}
                                </h6>
                                <span><EditDeleteComment comment={comment} postId={el._id} /></span>
                          </div>
                            <br></br>
    
                       </div>
                       
            )
                }).reverse()
            }
                              
        <form style={{position:'sticky',bottom:'0px',overflowX:'hidden',width:'100%',backgroundColor:'white'}} action="" onSubmit={handleComment}>
                                       <div className="input-group">
           
                    <TextareaAutosize
                        className='inputComment'
              minRows={2}
              maxRows={10}
              style={{ width:' 90%',border:'none',backgroundColor:'white',color:'black' }}
                        margin='normal' variant='outlined' required label='Laisser un commentaire' placeholder='Laissez un commentaire' value={text} onChange={(e) => setText(e.target.value)} /> 
            
                       <Button type='submit' variant='contained'><SendIcon/></Button> 
                                        
                                       </div>
                                    </form>
        </div>
    );
};

export default CardComment;