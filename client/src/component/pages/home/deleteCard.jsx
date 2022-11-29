import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../features/post.reducers';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteCard = ({el}) => {
    const dispatch = useDispatch();
 

    
    
             const deleteRquest = async () => {
  await axios
            .delete(`${process.env.REACT_APP_URL_POST}/${el._id}`
                

 ).catch(error => {
   console.log(error)
     ;
  
  
            })
                
    
  }
     const deleteQuote = () => {
    deleteRquest().then(() => {
      dispatch(deletePost())
    })
  }
    return (
        <div onClick={() => {
                        if (window.confirm('Voulez vous supprimez ce post ?')) {
                          // eslint-disable-next-line no-lone-blocks
                          {deleteQuote()}
                        }
        }}> 
            
        {/* <img  style={{ cursor: 'pointer' }} width={25} src='../logo/trash.svg' alt='edit_svg' /> */}
        {/* <i style={{color:'white'}} className="fa-solid fa-trash"></i> */}
        <DeleteIcon  style={{color:'white',cursor: 'pointer'}} />
        </div>
    );
};

export default DeleteCard