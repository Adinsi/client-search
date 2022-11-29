/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../../features/post.reducers';
import { dateParser, isempty } from '../../utils';
// import '../../styles/postprofil.scss'
import '../home/card.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import { Button, TextareaAutosize } from '@mui/material';
import LikeButon from '../home/likebuuton';
import DeleteCard from '../home/deleteCard';
import CardComment from '../home/cardComment';
import Postform from './postform';
import Listpost from '../home/listpost';

const Postprofil = () => {
   const dispatch = useDispatch();
const userData = useSelector(state => state.user.user);
  const users = useSelector(state => state.users.users);
   const allPosts = useSelector((state) => state.posts.posts);
const [isUpdated, setUpdated] = useState(false);
   const [textUpdated, settextUpdated] = useState(null);
  const [showComment, setShowComment] = useState(false)
    const [lireLaSuite, setLireLaSuite] = useState(false);
  
  const LirePlus = () => {
    setLireLaSuite(!lireLaSuite)
  }
   const id = allPosts?.filter((el) => {
      if(el.posterId===userData._id) return true
   }).map(el => el._id)
      const editRquest = async () => {
  await axios
            .put(`${process.env.REACT_APP_URL_POST}/${id}`,
                
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

      



    

   
   return (
      <>
     
         <Postform/>
           
         {
                
                
                  // !isempty(allPosts[0]) &&
              allPosts?.filter( el => {
            if (el.posterId === userData._id) {
              return true
            } 
              })
               // .slice(0, count)
          .map((el) => {
            return (
               
               

              
            
     <Listpost el={el} key={el._id} />
     
        
            
          )
          })
            }
         
            
             
               
               
              
         
               
            
         
       </>
  
    );
};

export default Postprofil;