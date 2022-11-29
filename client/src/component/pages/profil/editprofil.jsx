import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut, uploadPicture } from '../../../features/user.reducers';
import '../../styles/editprofil.scss'
import Updateprofil from './updateprofil';

const Editprofil = () => {
    const [forma, setForma] = useState(false);
  const user = useSelector((state) => state.user.user);
  const history = useNavigate()
    const dispatch = useDispatch()
    const id = user._id;
    const [file, setFile] = useState();
    const UploadImageRequest = async () => {
                 const data = new FormData();
        data.append('name', user._id);
        data.append('userId', user._id);
        data.append('image', file);
 const res =  await axios
            .post(`http://localhost:7500/single`,
                
 
 data
  // commenterId ,
  // commenterNom ,
  // commenterPrenom ,
  //    text,

              
 )
     .then(() => {
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
    const handlePicture = (e) => {
        e.preventDefault();
        
    
        UploadImageRequest().then(() => {
                dispatch(uploadPicture()) 
        })
   
  }
    const sendlogOutRequest = async () => {
    const res = await axios.post(`${process.env.REACT_APP_URL_USER}/logout`, null, {
      withCredentials:true
    })
    if (res.status === 200) {
      return res
    }
    return new Error('Déconnexion échoué, reprenez svp')
  }
  const handleLogOut = () => {
    sendlogOutRequest().then(() => {
      dispatch(logOut());
      history('/')
})
   
  }

  
    return (
      <div id='editprofil' >
           <Button  color='error' variant='contained' onClick={() => {
                        if (window.confirm('Voulez vous vraiment vous déconnectez ?')) {
                          // eslint-disable-next-line no-lone-blocks
                          {handleLogOut()}
                        }
                      }} >Deconnecter</Button> 
        <div className="edit">
             
            {
                
                <form style={{marginTop:'10px'}} className='center' action='' onSubmit={handlePicture}>
                   
                    {/* <label style={{ cursor: 'pointer', color: '#000', textDecoration: 'underline' }} htmlFor='image' onClick={handleChangeForm} >Changer d'image</label> */}

                    <Button
                        // onClick={handleChangeForm}
               variant='outlined' >Changer d'image
                      <input style={{padding:'0px',margin:'0px'}} type='file' name='image' accept='.jpg, .jpeg, .png' onChange={(e) => {
                    setFile(e.target.files[0])
                               
                            }} />
                    </Button>
                           <Button type={'submit'} sx={{marginBottom:2,marginTop:2
                                ,borderRadius:1,padding:1}} color='primary' variant='contained' >Envoyer</Button>
                  
               
             
                 
            </form>
     
                    
//              <div class="center">
//   <div class="form-input">
                       
                        

//                      <form action='' onSubmit={handlePicture}>
                   
//                   <label style={{ cursor: 'pointer', color: '#000', textDecoration: 'underline' }} htmlFor='image' onClick={handleChangeForm} >Changer d'image</label>
//                     <br></br>
//                     {forma ? 
                        
//                         <>
//                                <input style={{padding:'5px',margin:'10px'}} type='file' name='image' accept='.jpg, .jpeg, .png' onChange={(e) => {
//                     setFile(e.target.files[0])
//                 }} />
//                 <br></br>
//                 <input style={{backgroundColor:'#1565C0',width:'100px',height:'40px',cursor:'pointer'}} type='submit' value='Envoyer' /> 
//                         </>  : null
//                     }
             
                 
//             </form>       
                        
    
//   </div>
// </div> 
           
            }
    </div>
       
            
        <Updateprofil />
            
            
          
          </div>
      
    );
};

export default Editprofil;