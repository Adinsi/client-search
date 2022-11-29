import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, signalPost, unsignalPost } from '../../../features/post.reducers';

const SignalPost = ({ el }) => {
       const dispatch = useDispatch();
    const [signal, setSignal] = useState(false);
    const user = useSelector(state => state.user.user);
    // const uid = user._id
    
     const sendRequestLike = async () => {
 const res =  await axios
            .patch(`${process.env.REACT_APP_URL_POST}/signal-post/${el?._id}`,
                
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
            .patch(`${process.env.REACT_APP_URL_POST}/unsignal-post/${el?._id}`,
                
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
    const signalPoste = () => {
        sendRequestLike().then(() => {
           dispatch(signalPost())
            setSignal(true)
           

        })
     
    }
const unsignal = () => {
    sendRquestPostunLike().then(() => {
        dispatch(unsignalPost())
        setSignal(false)
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
        if (el?.signal.includes(user._id)) return setSignal(true);
        else return setSignal(false)
    }, [el?.signal, signal, user._id]);


    return (
        <div>
              {
                 signal === false && (
                    
            <>
                        {/* <i style={{ color: 'gray', cursor: 'pointer' }} onClick={signalPost} className="fa-solid fa-face-disappointed">signaler</i>  */}
                        <i style={{ color: 'gray', cursor: 'pointer' }}  onClick={signalPoste}  class="fa-solid fa-face-sad-tear"></i>
                       
              <span>
                {
                 <span>{el?.signal.length} 
                  </span> }
            </span>
                    
            </>
                )
            }
             {
                 signal  && (
                    
            <>
                        {/* <p style={{ color: 'blue', cursor: 'pointer' }} onClick={unsignal} className="fa-solid fa-face-disappointed">signaler</p>  */}
                              <i style={{ color: 'red', cursor: 'pointer' }}  onClick={unsignal}  class="fa-solid fa-face-sad-tear"></i>
                        
            <span>
                {el?.signal.length > 1 ?
                  <span>vous et {el?.signal.length - 1 > 1000 ?
                    <span>
                    {(el?.signal.length-1) / 1000}k autres personnes  ont signalé ce post
                  </span> : <span>{el?.signal.length - 1} autres personnes ont signalé ce post</span> }
                  </span> : <span>{el?.signal.length} 
                  
                  </span>}
                {
                  el?.signal.length >=50 && deleteQuote()
                }
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
    
        </div>
    );
};

export default SignalPost;