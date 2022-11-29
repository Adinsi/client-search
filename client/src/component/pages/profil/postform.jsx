import { Button, TextareaAutosize,Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addPost, getAllPost } from '../../../features/post.reducers';
import { isempty, timestamParser } from '../../utils';
import './postform.scss'


const Postform = () => {
      const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
const[isLoading,setisLoading] = useState(true)
  const [message, setmessage] = useState('');
  const [postPicture, setpostPicture] = useState(null);
  const [video, setvideo] = useState();
  const [file, setfile] = useState();




  
  const posterId = user._id;

  const activitePost = user.activite;
  const emailPoster = user.email

  // console.log(posterId,activitePost,villePost);
    const sendRquest = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_POST}`, {
      withCredentials: true
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }

     const sendRquestPost = async () => {
 const res =  await axios
            .post(`${process.env.REACT_APP_URL_POST}`,
                
 {
 
   posterId: posterId,
 
   activitePost: activitePost,
 
   message,
       emailPoster : emailPoster
  //  picture : `../image/${user.prenom}.jpg`

   
              }
 ).catch(error => {
   console.log(error)
     ;

            })
                
    const data = await res.data;
    return data;
}
    const handleSubmit = async (e) => {

    e.preventDefault();
    
 
      sendRquestPost().then((data) => {
      
        dispatch(addPost(data))
        setmessage('')
          // .then(() => dispatch(getAllPost()))
       
              // formRef.current.reset();

         
      })
        
        
      
  }
  
  const handlePostUpload = async () => {
    if (message || postPicture || video) {
         const data = new FormData();
        data.append('posterId', user._id);
        data.append('message', message);
        const activitePost = user.activite;
      data.append('activitePost', user.activite);
      data.append('quartierPost', user.quartier);
      data.append('emailPoster', user.email);
      if(file) data.append('posts',file)
      data.append('video', video);
      const res =  await axios
        .post(`${process.env.REACT_APP_URL_POST}`,
          data
          

          
         
            
                
 

  

              
 )
                
    const datas = await res.data;
    return datas;
    }
  
    else {
  alert('Veuillez entrez un méssage')
     
    
    }

          
  }
  const handlePost = async () => {
    handlePostUpload().then((data) => {
      dispatch(addPost(data))
     
    }).then(() => {
      dispatch(getAllPost())
     
    })
      cancelPost()
   
  }
  const handlePicture = (e) => {
     setpostPicture(URL.createObjectURL(e.target.files[0]));
    setfile(e.target.files[0]);
    setvideo('');
  }
  const cancelPost = () => {
    setmessage('')
    setpostPicture('')
    setvideo('')
    setfile('')
  }
  const handleVideo = () => {
    let findLink = message.split(" ");
    for (let i = 0; i < findLink.length; i++){
      if (findLink[i].includes('https://www.you') || findLink[i].includes('https://you')) {
             let embed = findLink[i].replace("watch?v=", "embed/");
          setvideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setmessage(findLink.join(" "));
          setpostPicture('');
      }
    }


  }
  useEffect(() => {
    if (!isempty(user)) {
      setisLoading(false)
      
    }
    handleVideo()
  }, [user,message,video]);

  useEffect(() => {
    sendRquest().then((data) => {
  dispatch(getAllPost(data))
    })
  })

    return (
    //   <div>
        
    //         <form method='post'onSubmit={handleSubmit} >
    //             <Box display='flex' flexDirection={"column"} maxWidth={300} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={4} padding={3} borderRadius={5}
                 
                    
                  
    //             >
    //                 <Typography  variant='h6' padding={1} textAlign='center'>
    //  Créer une publication
    //                 </Typography>
                   
    //         <TextareaAutosize
    //           minRows={5}
    //           maxRows={20}
    //           style={{ minWidth: 300 }}
    //           margin='normal'  variant='outlined' required label='De quoi avez-vous bésoin ?' value={message} onChange={(e) => setmessage(e.target.value)} />
                           
                  
          
    
            
    //                 <Button type='submit' sx={{marginTop:1,borderRadius:1}} variant='contained'>Publier</Button>
        
    //       </Box>
    //    </form>
    //     </div>*
//       <>
      
//       {
//          !isLoading ?   <i className="fas fa-spinner fa-spin"></i> :   <div className="container">
//         <div className="first">
//           <img src={user.picture} width={40} alt='profil_card' />
//         </div>
//         <div className="second">
//           {/* <textarea type='text' row='5'  ></textarea> */}
//            <TextareaAutosize
//           minRows={5}
//           maxRows={20}
//          style={{ minWidth: 300 }}
//          margin='normal'placeholder='Quoi de neuf ?'  variant='outlined' label='De quoi avez-vous bésoin ?' value={message} onChange={(e) => setmessage(e.target.value)} />
         
//             </div>
//             {
//               message || postPicture || video?.length > 0 ?
//                  <div className="troisieme">
//           <div className="nom">
//                  <img src={user.picture} width={40} alt='profil_card' />
//                 <p>{user.prenom} { user.nom } </p>
//                     <p className='date'>{ timestamParser(Date.now())}</p>
//                   </div>
//                   <div style={{ textAlign: 'center', widthMax: '200px', height: '200px', display: 'flex', flexWrap:'wrap'}}>

//                   <p  className='hello'>
// {message}
//               </p>
//                     <img src={postPicture} alt='' />
//                     {video && (
//                       <iframe
//                 width="500"
//                 height="300"
//                 src={video}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={video}
//                  ></iframe>
//                     )}
//                   </div>
//         </div> :''
//             }
        
//             <div className="quatrieme">
//               {isempty(video) &&
//                 <>

//                     <img style={{ color: 'white' }} src="./img/icons/picture.svg" alt="img" />
//                 <input style={{position:'relative',left:'-30px',top:'-15px',width:'10px',border:'none'}} type='file' id='file-upload' name='posts' accept='.jpg, .jpeg, .png' onChange={(e) => handlePicture(e)} />
//                    </>
//               }
             

           
//               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 {video &&
                
//               <button onClick={()=>setvideo('')} style={{ width: "auto", height: "40px", padding: '5px', color: 'red', fontSize: '1.1rem', marginLeft:'20px',marginBottom:'10px',cursor:'pointer'}}>Supprimer vidéo</button>
//                 }
//                 {
//                   message || postPicture || video?.length > 0 ?
//                               <button onClick={cancelPost} style={{ width: "auto", height: "40px", padding: '5px', color: 'red', fontSize: '1.1rem', marginLeft:'20px',marginBottom:'10px',cursor:'pointer'}}>Annuler Post</button> :null
// }
//           <button onClick={handlePost} style={{ width: "auto", height: "40px", padding: '5px', color: 'green', fontSize: '1.1rem', marginLeft:'20px',marginBottom:'10px',cursor:'pointer'}}>Envoyer</button>
//       </div>
//         </div>
       
         
// </div>
//       }
//       </>  $
      
      <>
        <br /><br />
           <div className="post-container">
        
      {isLoading ? ( 
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          {/* <div className="data">
            <p>
              <span>{user.following ? user.following?.length : 0}</span>{" "}
              Abonnement
              {user.following && user.following?.length > 1 ? "s" : null}
            </p>
            <p>
              <span>{user.followers ? user.followers?.length : 0}</span>{" "}
              Abonné
              {user.followers && user.followers?.length > 1 ? "s" : null}
            </p>
          </div> */}
          <NavLink exact to="/profil">
            <div  className="user-info">
              <img src={user.picture} alt="user-img" />
            </div>
          </NavLink>
          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setmessage(e.target.value)}
              value={message}
            />
            {message || postPicture || video?.length > 20 ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={user.picture} alt="user-pic" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{user.pseudo}</h3>
                    </div>
                    <span>{timestamParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    <img src={postPicture} alt="" />
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isempty(video) && (
                  <>
                    <img src="./img/icons/picture.svg" alt="img"  />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setvideo("")}>Supprimer video</button>
                )}
              </div>
              {/* {!isempty(error.format) && <p>{error.format}</p>}
              {!isempty(error.maxSize) && <p>{error.maxSize}</p>} */}
              <div className="btn-send">
                {message || postPicture || video?.length > 20 ? (
                  // <button  style={{cursor:'pointer',padding:'5px'}} className="cancel" onClick={cancelPost}>
                  //   Annuler message
                  // </button>
                 <Button className="cancel"  style={{width:'80px',margin:10}} onClick={cancelPost} type='submit' variant='outlined' color='error' >Annuler</Button>
                ) : null}
                {/* <button style={{cursor:'pointer',padding:'10px',backgroundColor:'blue',color:'white'}} type='submit' className="send" onClick={handlePost}>
                  Envoyer
                      </button> */}
                      <Button className="send"  style={{width:'80px',margin:10}} onClick={handlePost} type='submit' variant='outlined' >Envoyer</Button>
                     
              </div>
            </div>
          </div>
        </>
          )}
           
    </div>
      </>
    );
};

export default Postform;