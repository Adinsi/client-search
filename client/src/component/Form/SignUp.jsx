/* eslint-disable no-unreachable */
import { Button, Checkbox, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import SignIn from './SignIn';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const SignUp = () => {
     const [formSubmit, setFormSubmit] = useState(false);
  
    const [nom, Setnom] = useState('');
    
  const [prenom, Setprenom] = useState('');

     const [quartier, Setquartier] = useState('');
  const [activite, Setactivite] = useState('');
  const [tel, SetTel] = useState('');
     const [email, Setemail] = useState('');

     const [erroremail, Seterroremail] = useState('');
  const [password, Setpassword] = useState('');
  const [errorpassword, Seterrorpassword] = useState('');
  const [Confimpassword, SetConfirmpassword] = useState('');


 
 
      const [eye, seteye] = useState(true);
  
  const Eyeclick = () => {
    seteye(!eye);
    const code = document.getElementById("password");
    if (eye) {
     code.setAttribute("type", "password");
      seteye(false);
    } else {
      
       code.setAttribute("type", "text");
    }
  };
  const sendRquest = async () => {
    

    
 const res =  await axios
            .post(`${process.env.REACT_APP_URL_USER}/register`,
                
 {
         nom,
   prenom,
   email,
   quartier,
   activite,
   tel,
   password
              }
 ).catch(error => {
     Seterroremail('')
   if (error.response.data.message.includes("L'utilisateur avec cet email existe déja ! connectez vous")) {
           Seterroremail(error.response.data.message)
     }
 
   
            })
                
    const data = res;
    return data;
}
     const handleSubmit = async (e) => {
         e.preventDefault();

       
       
       Seterroremail('')
        if (navigator.onLine) {
  Seterroremail("")
        }
        else {
         Seterroremail("Connexion non active, vérifiez votre connexion puis réessayer!")
        }
      
   
     
         Seterrorpassword('')
 
         if (password !== Confimpassword) return Seterrorpassword('Les mots de passe ne correspondent');
         if (password.length <= 6) return Seterrorpassword('Le Mot de passe est trop faible')
             
         else {
               sendRquest().then((res) => {
                   Seterrorpassword('');
                   if(res) return setFormSubmit(true)
                
              
         }).catch((err) => {
             Seterrorpassword('')
             if (err) Seterrorpassword('Connexion non active, réessayer plus tard')
             setFormSubmit(false);
         })
       
          }
       
        
         
       


     
  }

    return (
        <div>
        {
                formSubmit ? (
                    <>
                        <SignIn />
                    </>
                ) : 
                        <>
                            <form  method='post' onSubmit={handleSubmit}>
                            <Box display='flex' flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={5} padding={3} borderRadius={5}
                            
                            >
                    <Typography  variant='h4' padding={3} textAlign='center'>
         Inscrivez vous 
                    </Typography>
                    <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>

                                    <TextField sx={{ marginRight: 1 }} margin='normal' type={'text'} variant='outlined' required label='Nom' value={nom} onChange={(e) => Setnom(e.target.value)
                            
                                    }
                                        
                                   
                  
                        />
                        
                        <TextField margin='normal' type={'text'} variant='outlined' required label=' Prenom' value={prenom} onChange={(e) => Setprenom(e.target.value)}
                   
                        />
                    </Box>

                    <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>
                        <TextField sx={{ marginRight: 1 }} margin='normal' type={'email'} variant='outlined' required label=' email' value={email} onChange={(e) => Setemail(e.target.value)}
                                        
                                     
                        />
                                    <TextField margin='normal'
                                            maxLength={8} minLength={8} 
                                        type={'text'} variant='outlined' required label='Tel' value={tel}
                                   
                                        onChange={(e) => SetTel(e.target.value)}
                                        inputProps={{ maxLength: 8}}

                                     
                        />
                                </Box>
                                   <Typography variant='body1' color='error' id='error' >{erroremail}</Typography>
                                <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}
                               
                                >
                        <TextField sx={{ marginRight: 1 }} margin='normal' type={'text'} variant='outlined' required label=' Quartier' value={quartier} onChange={(e) => Setquartier(e.target.value)}
                           
                        />
                        <TextField margin='normal' type={'text'} variant='outlined' required label=" Domaine d'activité" value={activite} onChange={(e) => Setactivite(e.target.value)}
                  
                        />
                    </Box>
                    <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>
                                    <TextField sx={{ marginRight: 1 }}  margin='normal' type={'text'} variant='outlined' required label='Mot de passe' value={password} onChange={(e) => Setpassword(e.target.value)}

                                       id='password'
                               
                               
                                    />
                                    {/* <i onClick={Eyeclick} className={eye ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} style={{ position: 'relative', right: '50px', top: '5px', fontSize: '16px', cursor: 'pointer' }} aria-hidden="true" type="button" id="eye"></i> */}
                                    <i onClick={Eyeclick}  style={{ position: 'relative', right: '50px', top: '5px', fontSize: '14px', cursor: 'pointer' }}>
  {eye ? <VisibilityOffIcon /> : <RemoveRedEyeIcon/>  }
                                    </i>
                                  
                                  
                                    
                        <TextField margin='normal' type={'password'} variant='outlined' required label='confirmez  Mot de passe' value={Confimpassword} onChange={(e) => SetConfirmpassword(e.target.value)}
                       
                        />
                                </Box>
                                <Typography variant='body1' color='error' id='error' >{errorpassword}</Typography>
                        <Box display='flex' flexDirection={"row"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin='auto' marginTop={1} padding={1}>
                         
                                    <Checkbox
                                        required
 type='checkbox'

  inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <NavLink to='/condtion_generale'>J'accepte les condition générales d'utilisation</NavLink>
                                </Box>
                    
                    <Button type={'submit'} sx={{marginTop:3,borderRadius:1}} variant='contained'>S'inscrire</Button>
                            </Box>
                               
       </form>
                        </>
                    
            
        }
        </div>
    );
};

export default SignUp;