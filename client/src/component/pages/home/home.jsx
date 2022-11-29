/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navigation/navbar';
import { useDispatch, useSelector } from 'react-redux';
import Notfound from '../notfound';
import { setgetUsers } from '../../../features/user.reducers';

import { getAllPost } from '../../../features/post.reducers';
import Listpost from './listpost';
import { setgetusers } from '../../../features/users.reducers';
import Postform from '../profil/postform';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import '../../styles/home.scss'
import { isempty } from '../../utils';
import Skeleton from '../../skeleton/Skeleton';

axios.defaults.withCredentials = true;
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  // const users = useSelector(state => state.users.users);
  const allPosts = useSelector((state) => state.posts.posts);
  
    const [loadPost, setloadPost] = useState(true)
  const [count, setcount] = useState(10);
  const [isChoice,setIschoice] = useState(false)
  const [isChoiceQuartier, setIschoiceQuartier] = useState(false);
  const [loading, setloading] = useState(true);



  //verifier le token
  //  const sendRquest = async () => {
  //   const res = await axios.get(
  //     `${process.env.REACT_APP_URL_USER}/jwt`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   // .catch(err => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // Récuperer touts les utilisateurs
   const sendRquestUsers = async () => {
      const res = await axios
        .get(`${process.env.REACT_APP_URL_USER}`, {
          withCredentials: true,
        })
        // .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
  // Recuperer touts les posts
    const sendRquestPost = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_POST}`, {
      withCredentials: true

    })
      // .catch(err => console.log(err));
    const data = await res.data
    return data
  }
  const handleChoice = () => {
    setIschoice(true)
    setIschoiceQuartier(false)
  }
  const handleChoiceFirst = () => {
    setIschoice(false)
    setIschoiceQuartier(false)
  }
  const handleChoiceQuartier = () => {
    setIschoice(true)
    setIschoiceQuartier(true)
  }
  //Au plus bas de la page recharger
    
  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
      setloadPost(true) 
    }
  }


    //  useEffect(() => {
    //     sendRquest().then((data) => {
    //       dispatch(setgetUsers(data.user));

    //       // console.log(data);
    // });
    //  },[dispatch])
  
    useEffect(() => {
      sendRquestUsers().then((data) => {
        dispatch(setgetusers(data));
          //  console.log(data);
        
      });
    }, [dispatch]);
    useEffect(() => {
    if (loadPost) {
      sendRquestPost()
        .then(() => {
          dispatch(getAllPost());
        
        
        });
       
        setcount(count + 5)
        setloadPost(false)
       
      
      
    }
    window.addEventListener('scroll', loadMore)
        return ()=> window.removeEventListener('scroll',loadMore)

    
    },[loadPost,dispatch,count,]);
 
    return (
        <>
       
            {
                user ? (
                    <>
              <Navbar />
              <>
                               {/* <div  className="wrapper">
                <div className="item">
                <Button style={{width:'280px'}} onClick={handleChoiceFirst} type='submit' variant='contained'>Touts les posts</Button>  </div>
                <div className="item">
                  <Button style={{width:'200px'}} type='submit' variant='contained' onClick={handleChoice}>{user.activite} Post</Button>

                </div>
                <div className="item"> <Button style={{width:'300px'}} type='submit' variant='contained' onClick={handleChoiceQuartier}>{user.activite} Post  {user.quartier} </Button></div>
               
        </div> */}
                <Postform />
      
                
              </>
{/* <button onClick={handleChoice}>J'aimerai voir les posts de deux</button>
<button onClick={handleChoiceFirst}>J'aimerai voir touts les posts</button> */}
           
               
              {/* <div className="wrapper">
                <div className="item">   <Button type='submit' sx={{ marginTop:1, borderRadius: 1 }} variant='outlined' onClick={handleChoice}>Voir les posts des { user.activite}</Button></div>
                <div className="item"> <Button onClick={handleChoiceFirst} type='submit' sx={{ marginTop:1, borderRadius: 1 }}variant='outlined'>Voir touts les posts</Button></div>
                <div className="item">   <Button type='submit' sx={{ marginTop:1, borderRadius: 1 }} variant='outlined' onClick={handleChoiceQuartier}>Voir les posts des {user.activite} dans la zone {user.quartier}</Button></div>
              </div> */}
          
      
          
            {
              allPosts ? 
                //  (!isempty (allPosts[0])) &&
                // loading ?
                //   <>
                //     <br /><br /><br /><br /><br />
                //      <h1 style={{ fontSize: '40px' }}>fhfhfhfhf</h1> 
                //   </> : 

            isChoice === false && allPosts?.slice(0,count).map(function (el) {
              return (
                <ul>


                  <Listpost el={el} />
               

                </ul>

              );
            }) 
                :      <Skeleton />
              }
                     {
                
                  // !isempty(allPosts[0]) &&
                
                isChoice && allPosts?.filter((el) => {
                 if (el.activitePost?.toLocaleLowerCase().includes(user.activite?.toLocaleLowerCase())) {
              return true
            }
                })
                  // .slice(0, count)
          .map((el,index) => {
            return (
            <ul>


              <Listpost el={el} cle={index}  />
               
            </ul>
            
          )
          })
              }
                      {
                
                  // !isempty(allPosts[0]) &&
                isChoice === false  && isChoiceQuartier && allPosts?.filter((el) => {
                 if (el.activitePost?.toLocaleLowerCase().includes(user.activite?.toLocaleLowerCase()) && el.quartierPost?.toLocaleLowerCase().includes(user.quartier?.toLocaleLowerCase()) ) {
              return true
            }
                })
                  // .slice(0, count)
          .map((el,index) => {
            return (
            <ul>


              <Listpost el={el} cle={index}  />
               
            </ul>
            
          )
          })
            }
                
                   
                    
            
                    </>
                ) : 
                    <>
                    <Notfound/>
                    </>
                
   }
        </>
    );
};

export default Home;