import { Button, Icon, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfil } from '../../../features/user.reducers';
import { dateParser } from '../../utils';


const Updateprofil = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    
 

    const [quartier,setquartier]= useState(user.quartier)
    const [tel ,setTel]= useState(user.tel)
    const [activite,setActivite]= useState(user.activite)
    const [email,setEmail]= useState(user.email)
    const [updateForm, setUpadateForm] = useState(false);
    const [ModalForm, setModalForm] = useState(false);
    const [ModalFormTwo, setModalFormTwo] = useState(false);

    const [error,setError] = useState('')
        const EditProfilRequest = async () => {
        
 const res =  await axios
            .put(`${process.env.REACT_APP_URL_USER}/${user._id}`,
                
 
                {
                    quartier: quartier,
                    tel: tel,
                    email: email,
                    activite:activite
 }


              
 )
     .then(() => {
         setUpadateForm(false)
       axios
            .get(`${process.env.REACT_APP_URL_USER}/jwt`)
 })
     .catch(error => {
   console.log(error)
     ;

            })
                
    const datas = await res.data;
    return datas;
 
  }
    const handleUpdate = (e) => {
        e.preventDefault(); 

        setError('');
        if (tel.length < 8 || tel.length>8) {
            
          return  setError("Votre nouveau numéro n'est pas coorect")
        }
        // setError('');
        //  if (email.includes('@')) {
        //    return setError("Votre nouveau email n'est pas correct")
        // }
        // else
           else return EditProfilRequest().then(() => {
                dispatch(updateProfil()) 
        })
   
    }

    return (
        <div>
   
            {
                updateForm === false && (
                    <>
                        {/* <div onClick={()=>setUpadateForm(!updateForm)}>
                        <p >{user.quartier}</p>
                        <p>{user.tel}</p>
                        <p>{user.activite}</p>
                        <p>{user.email}</p>
                        </div>
                        <button onClick={()=>setUpadateForm(!updateForm)}>Modifier votre profil</button> */}
                            <Box display='flex' flexDirection={"column"} maxWidth={300} alignItems={'flexstart'} justifyContent={'center'} margin='auto' marginTop={4} padding={3} borderRadius={5}
                    boxShadow={'1px 2px 6px 2px #ccc'}
                    
                    // sx={{
                    //     ":hover": {
                    //         boxShadow: '10px 10px 20px #ccc',
                            
                    //     }
                    // }}
                >
                    <Typography variant='body'  padding={2} textAlign='left'>
                                <Icon>
                                    <AddHomeIcon />
                                </Icon> Habite à <span style={{ color: '#000', fontWeight: 'bolder' }}>{user.quartier}</span>
                            </Typography>
                             <Typography  variant='body' padding={2} textAlign='left'>
  <Icon>
                                    <LocalPhoneIcon />
                                </Icon> <span style={{color:'#000',fontWeight:'bolder'}}>{user.tel}</span>
                            </Typography>

                        
                            
                             <Typography  variant='body' padding={2} textAlign='left'>
  <Icon>
                                    <WorkRoundedIcon />
                                </Icon> Travail pour <span style={{color:'#000',fontWeight:'bolder'}}>{user.activite}</span>
                    </Typography>
                             <Typography variant='body' padding={2} textAlign='left'>
  <Icon>
                                    <MarkEmailReadRoundedIcon />
                                </Icon> <span style={{color:'#000',fontWeight:'bolder'}}>{user.email}</span>
                            </Typography>
                      
                             <Typography variant='body' padding={2} textAlign='left'>Membre dépuis le :
  <span style={{color:'#000',fontWeight:'bolder'}}> {dateParser( user.createdAt)}</span>
                            </Typography>
{/*                       
                   
                            {
                                
                                ModalForm=== false && 
                                    <>
                                        
                                    <Button type='submit' sx={{ marginTop: 3, borderRadius: 1 }}  variant='outlined' >Abonnement : {user.following?.length}</Button>
                                
                                    </>
                            }
                              {
                                
                                ModalFormTwo=== false && 
                                    <>
                                      

                                
                                
                                       <Button type='submit' sx={{ marginTop: 3, borderRadius: 1 }}  variant='outlined' >Abonnées : {user.followers?.length}</Button>    
                                
                                       <Button type='submit' sx={{ marginTop: 3, borderRadius: 1 }}  variant='outlined' >Voir mes abonnement et abonnées</Button>    
                                    </>
                            } */}
                            {/* {
                                ModalForm &&  <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'flexStart'} justifyContent={'flexStart'} margin='auto' marginTop={7} padding={3} borderRadius={5}    boxShadow={'1px 2px 6px 2px #ccc'} zIndex={2000}
                  
                    
                                sx={{
                        
                       
                             position:'relative',top:-420,backgroundColor:'whitesmoke',width:'80%',height:'300px'
                              
                    }}
                                >
                                         <Icon>
                                    < CloseIcon  onClick={()=>setModalForm(!ModalForm)} sx={{
                                position:'absolute' , right:'10px',top :'10px',cursor:'pointer'
                                   }} />
                </Icon>
                              
                   
 <Typography variant='body1' color='primary' id='error' >Abonnement</Typography>
                     
                    <Following/>
                   
                    
                          
                                   
           
         
            
         
          </Box>
                            } */}
                            {/* {
                                ModalFormTwo &&  <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'flexStart'} justifyContent={'flexStart'} margin='auto' marginTop={7} padding={3} borderRadius={5}    boxShadow={'1px 2px 6px 2px #ccc'} zIndex={2000}
                  
                    
                                sx={{
                        
                       
                             position:'relative',top:-420,backgroundColor:'whitesmoke',width:'80%',height:'300px'
                              
                    }}
                                >
                                         <Icon>
                                    < CloseIcon  onClick={()=>setModalFormTwo(!ModalFormTwo)} sx={{
                                position:'absolute' , right:'10px',top :'10px',cursor:'pointer'
                                   }} />
                </Icon>
                              
                   
 <Typography variant='body1' color='primary' id='error' >Abonnées</Typography>
                     
                    
                   
                    <Followers/>
                          
                                   
           
         
            
         
          </Box>
                            } */}
            
                    <Button type='submit' sx={{marginTop:3,borderRadius:1}} variant='contained' onClick={()=>setUpadateForm(!updateForm)}>Modifier mon profil</Button>
         
          </Box>
                    </>
)
            }
            {updateForm && (
                <>
                    {/* <input  type='text' defaultValue={user.quartier}onChange={(e)=>setquartier(e.target.value)} value={quartier}   />
                    <input  type='text' defaultValue={user.tel}onChange={(e)=>setTel(e.target.value)} value={tel}/>
                    <input type='text' defaultValue={user.activite}onChange={(e)=>setActivite(e.target.value)} value={activite}/>
                    <input type='text' defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} value={email} />
                    <button onClick={handleUpdate}>Valider modifications</button> */}

                     <div >
                        <form >
                            
                            
                <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={7} padding={3} borderRadius={5}    boxShadow={'1px 2px 6px 2px #ccc'}
                  
                    
                                sx={{
                        
                       
                                   
                                position:'relative' 
                              
                    }}
                >
                                <Icon>
                                    < CloseIcon  onClick={()=>setUpadateForm(!updateForm)} sx={{
                                position:'absolute' , right:'10px',top :'10px',cursor:'pointer'
                                   }} />
                </Icon>
                   
                                <TextField 
                                    required 
                                    label='quartier'
                                margin='normal' type={'text'} variant='outlined'  placeholder='quartier' value={quartier} onChange={(e) => setquartier(e.target.value)}/>
                                <TextField
                                    required 
                                      label='tel'
                                    margin='normal' type={'text'} variant='outlined' placeholder='Tel' value={tel} onChange={(e) => setTel(e.target.value)} 
                                        inputProps={{ maxLength :8 }}
                                />
                                    <Typography variant='body1' color='error' id='error' >{error}</Typography>
                                <TextField
                                    required 
                                      label='activite'
                                margin='normal' type={'text'} variant='outlined' placeholder='Activite'  value={activite} onChange={(e) => setActivite(e.target.value)} />
                    
                   
                    
                                <TextField
                                    required 
                                      label='email'
                                    margin='normal' type={'email'} variant='outlined' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <Typography variant='body1' color='error' id='error' >{error}</Typography>
           
         
            
                    <Button type='submit' sx={{marginTop:3,borderRadius:1}} variant='contained' onClick={handleUpdate}>Valider Modification</Button>
         
          </Box>
       </form>
       
        </div>
                    
                </>
            )}
        </div>
    );
};

export default Updateprofil;