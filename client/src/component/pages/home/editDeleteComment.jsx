import { Button, TextareaAutosize } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteCommentPost, editCommentPost } from '../../../features/post.reducers';

const EditDeleteComment = ({ comment, postId }) => {
    const [isAuthor, setAuthor] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('');
    const user = useSelector(state => state.user.user);
    const uid = user._id;
    const dispatch = useDispatch();
       const editComment = async () => {
  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/edit-comment-post/${postId}`,
                
 {
 
  
     message: text,
     commentId: comment._id
              }
 ).catch(error => {
   console.log(error)
     ;
  
  
            })
 
  }
       const deleteComment = async () => {
  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/delete-comment-post/${postId}`,
                
 {
 
  
   
     commentId: comment._id
              }
 ).catch(error => {
   console.log(error)
     ;
  
  
            })
 
  }
    const handleEdit = (e) => {
        e.preventDefault();
        if (text) {
             editComment().then(() => {
      dispatch(editCommentPost())
    })
    setText('')
    setEdit(false)
        }
    }

    const handleDelete = () => {
      
              deleteComment().then(() => {
      dispatch(deleteCommentPost())
    })
    }

    useEffect(() => {
        const checkIsAuthor = () => {
            if (uid === comment.commenterId) {
                   setAuthor(true)
            }
            
        }
        checkIsAuthor()
    },[uid,comment.commenterId])
    
    return (
        <div>
            {isAuthor && edit === false && (
                <>
                <span onClick={() => setEdit(!edit)}>
                      <img style={{cursor:'pointer'}} width={25} src='../logo/edit.svg' alt='edit_svg' />
                </span>

                  <span onClick={() => {
                if (window.confirm('Voulez vous supprimez ce commentaire ?')) {
                    handleDelete()
                }
             }}>
                      <img style={{cursor:'pointer'}} width={25} src='../logo/trash.svg' alt='trash_svg' />
                </span>
                </>
            )} 
            {
                isAuthor && edit && (
                    <form action="" onSubmit={handleEdit}>
                        <label style={{color:'red'}} htmlFor='text' onClick={() => setEdit(!edit)}>Editer</label>
                      
                                 <TextareaAutosize
              minRows={2}
                                                      maxRows={7}
                            defaultValue={comment.text}
                            
                                                    
                                                         onChange={(e)=>setText(e.target.value)}
              style={{ minWidth: 200 }}
              margin='normal'  variant='outlined' required label='aisser un commentaire' />
               

                    <Button type='submit' sx={{marginTop:1,borderRadius:5,}} variant='standard' color={'primary'}>Valider modification</Button>
                    </form>
                )
            }
          
        </div>
    );
};

export default EditDeleteComment;