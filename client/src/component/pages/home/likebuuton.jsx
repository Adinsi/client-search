import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { deletePost, dislikePost, likePost } from '../../../features/post.reducers';

const LikeButon = ({ el }) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const user = useSelector(state => state.user.user);
    // const uid = user._id
    
     const sendRequestLike = async () => {
 const res =  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/like-post/${el?._id}`,
                
 {
 
   id: user._id,
   
   
              }
 ).catch(error => {
   console.log(error)
     ;

            })
                
    const data = await res.data;
    return data;
    }
     const sendRquestPostunLike = async () => {
 const res =  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/unlike-post/${el?._id}`,
                
 {
 
   id: user._id,
   
   
              }
 ).catch(error => {
   console.log(error)
     ;

            })
                
    const data = await res.data;
    return data;
    }
    const like = () => {
        sendRequestLike().then(() => {
           dispatch(likePost())
setLiked(true)

      })
    }
const unlike = () => {
    sendRquestPostunLike().then(() => {
        dispatch(dislikePost())
        setLiked(false)
      })

        }

      
 

    
    
             const deleteRquest = async () => {
  await axios
            .delete(`${process.env.REACT_APP_URL_POST}/${el?._id}`
                

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
             
    useEffect(() => {
        if (el?.likers.includes(user._id)) return setLiked(true);
        else return setLiked(false)
    }, [el?.likers, liked, user._id]);


    
    return (
        <>
            
            {
                 liked === false && (
                    
            <>
              {/* <i style={{ color: 'gray', cursor: 'pointer' }} onClick={like} className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>  */}
              <ThumbUpIcon style={{ color: 'gray', cursor: 'pointer' }} onClick={like} />
              <span>
                {
                 <span>{el?.likers.length} 
                  </span> }
            </span>
                    
            </>
                )
            }
             {
                 liked  && (
                    
            <>
              {/* <i style={{ color: 'blue', cursor: 'pointer' }} onClick={unlike} className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> */}
              <ThumbUpIcon
                style={{ color: 'blue', cursor: 'pointer' }} onClick={unlike} />
            <span>
                {el?.likers.length > 1 ?
                  <span>vous et {el?.likers.length - 1 > 1000 ?
                    <span>
                    {(el?.likers.length-1) / 1000}k autres personnes  ont aimé ce post
                  </span> : <span>{el?.likers.length - 1} autres personnes ont aimé ce post</span> }
                  </span> : <span>{el?.likers.length} 
                  
                  </span>}
               
            </span>
            </>
           
                    
                )
        }
        {/* {
          el?.likers.filter((elem) => {
            if (elem === user._id) {
              return true
            }
          }).map((ele) => {
            return (
              <>
                {el?.likers.length > 1 ?
                  <span className="stats-total">Vous et {el?.likers.length - 1} autres personnes</span> :<span> {el?.likers.length + 1}</span>
                  
               }
                   
              </>
            )
          })
        } */}
{/*         
        {
          el?.likers.filter((elem) => {
            if (elem !== user._id) {
              return true
            }
          }).map((ele) => {
            return (
             <>
              
                  <span> {el?.likers.length}</span>
                  
            
                   
              </>
            )
          })
        } */}
            {/* {
                el?.likers?.lenght >= 1000 ? <span style={{fontSize:'164x'}} className="stats-total">  {el?.likers.length/1000}k</span> : <span  style={{fontSize:'14px'}}  className="stats-total">  {el?.likers.length} </span> 
                
        } */}
        
          {/* <i style={{ color: 'black' }} className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> :    <i style={{ color: 'blue' }} className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> */}
        </>
    );
};

export default LikeButon;