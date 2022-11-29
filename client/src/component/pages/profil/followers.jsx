/* eslint-disable array-callback-return */
import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';



import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { setgetusers } from '../../../features/users.reducers';
import Handlerfollow from './handlerfollow';



export default function Followers() {

        const userData = useSelector((state) => state.user.user);


  //MEs fonctions
 
  const users = useSelector((state) => state.users.users);

     const dispatch = useDispatch();
    const sendRquest = async () => {
      const res = await axios
        .get(`${process.env.REACT_APP_URL_USER}`, {
          withCredentials: true,
        })
        // .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
  React.useEffect(() => {
      sendRquest().then((data) => {
        dispatch(setgetusers(data));
        
      });
    });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      

      />
      
      {
        users.map((user) => {
          for (let i = 0; i < userData.followers?.length; i++){
            if (user._id === userData.followers[i]) {
              return (
                <>
                   <li style={{backgroundColor:'whitesmoke',listStyle:'none'}} key={user._id}>

                    <img width={40} height={40} style={{borderRadius:'100%'}} src={user.picture} alt='image_Profil' />
                    <span style={{marginLeft:'30px'}} >{user.nom} {user.prenom}</span>
                          <h4>
                              <Handlerfollow />
                          </h4>

                  </li>
                </>
              )
            }
          }
        })
     }

    </Card>
  );
}
