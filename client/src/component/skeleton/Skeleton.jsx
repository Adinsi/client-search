
import React, { useEffect, useState } from 'react';

import ForumIcon from '@mui/icons-material/Forum';


import EditIcon from '@mui/icons-material/Edit';


import './skeleton.scss';
const Skeleton = () => {
    return (
     
        <div className='skeleton'>
        
        <div className="card-container">
            
            
            <>
             <div className="card-left">
              
<img
              src="../uploads/tel.png"
              alt="poster-pic"
            />
               
             
            
             </div>
             <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
           
                <h3>
                 <span style={{color:'gray',width:'100px',height:'10px',backgroundColor:"gray",margin:'10px'}}></span> 
                 {/* <span style={{color:'gray',width:'100px',height:'10px',backgroundColor:"gray"}}>
                       
                   ........................
                   </span> */}
                   
                     {/* {
                      ( userData.email) === JSON.stringify(email) && <p>jjjj</p>
                      }
                       */}
                     {/* {el.emailPoster === "adinsiabdias@gmail.com" &&  <span style={{ color: 'blue', marginLeft: '10px' }}>Ceo<CheckCircleIcon style={{ fontSize: 17}} /></span>}
                     {el.emailPoster !== 'adinsiabdias@gmail.com' && el.likers.length >= 20 && <span style={{ color: 'green', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 17 }} /></span>} */}
                     
                      {/* {el.emailPoster !== 'adinsiabdias@gmail.com' && el.likers.length<20 && <span style={{ color: 'red', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 17 }} /></span>}
                      */}
                   </h3>
                        <h3>
                  
                       </h3>
                           
                {/* {el.posterId !== userData?._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )} */}
              </div>
                 <span style={{color:'gray',width:'280px',height:'10px',backgroundColor:"gray",margin:'10px'}}>   
                      </span>
                 <span style={{color:'gray',width:'240px',height:'10px',backgroundColor:"gray",margin:'10px'}}></span>
            </div>
              
            <p style={{color:'gray',width:'90%',height:'200px',backgroundColor:"gray"}}>

                        
            </p >
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
            
           
               
               <br></br>
               {/* <div style={{}}>
               
               </div> */}
               
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
                      <div style={{ display: 'flex' }}>
                   
             {/* <img width='30' height='30px' style={{borderRadius:'50%'}} src='../uploads/tel.png' alt='update' /> */}
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
                   {/* <ForumIcon
                 
                   style={{cursor:'pointer'}}
                   /> */}
              {/* <img width='30' height='30px' style={{borderRadius:'50%'}} src='../uploads/tel.png' alt='update' /> */}
              </div>
             
              {/* <img src="./img/icons/share.svg" alt="share" /> */}
            </div>
                     {/* {showComment && <CardComment el={el} />} */}
                     
             </div>
             
        
        </>
   </div>
          <div className="card-container">
            
            
            <>
             <div className="card-left">
              
<img
              src="../uploads/tel.png"
              alt="poster-pic"
            />
               
             
            
             </div>
             <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
           
                <h3>
                 <span style={{color:'gray',width:'100px',height:'10px',backgroundColor:"gray",margin:'10px'}}></span> 
                 {/* <span style={{color:'gray',width:'100px',height:'10px',backgroundColor:"gray"}}>
                       
                   ........................
                   </span> */}
                   
                     {/* {
                      ( userData.email) === JSON.stringify(email) && <p>jjjj</p>
                      }
                       */}
                     {/* {el.emailPoster === "adinsiabdias@gmail.com" &&  <span style={{ color: 'blue', marginLeft: '10px' }}>Ceo<CheckCircleIcon style={{ fontSize: 17}} /></span>}
                     {el.emailPoster !== 'adinsiabdias@gmail.com' && el.likers.length >= 20 && <span style={{ color: 'green', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 17 }} /></span>} */}
                     
                      {/* {el.emailPoster !== 'adinsiabdias@gmail.com' && el.likers.length<20 && <span style={{ color: 'red', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 17 }} /></span>}
                      */}
                   </h3>
                        <h3>
                  
                       </h3>
                           
                {/* {el.posterId !== userData?._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )} */}
              </div>
                 <span style={{color:'gray',width:'280px',height:'10px',backgroundColor:"gray",margin:'10px'}}>   
                      </span>
                 <span style={{color:'gray',width:'240px',height:'10px',backgroundColor:"gray",margin:'10px'}}></span>
            </div>
              
            <p style={{color:'gray',width:'90%',height:'200px',backgroundColor:"gray"}}>

                        
            </p >
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
            
             
               
               <br></br>
               {/* <div style={{}}>
               
               </div> */}
               
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
                
               
               <div className="card-footer">
              <div className="comment-icon">
                {/* <img
                  onClick={() => setShowComment(!showComment)}
                  src="./img/icons/message1.svg"
                  alt="comment"
                /> */}
                   {/* <ForumIcon
                 
                   style={{cursor:'pointer'}}
                   /> */}
              {/* <img width='30' height='30px' style={{borderRadius:'50%'}} src='../uploads/tel.png' alt='update' /> */}
              </div>
             
              {/* <img src="./img/icons/share.svg" alt="share" /> */}
            </div>
                     {/* {showComment && <CardComment el={el} />} */}
                     
             </div>
             
        
        </>
   </div>
        </div>
        
    
      
    );
};

export default Skeleton;