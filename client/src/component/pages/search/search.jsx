/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../navigation/navbar';
import Notfound from '../notfound';
// import '../styles/search.scss';
import { setgetUsers } from '../../../features/user.reducers';
import axios from 'axios';
// import { getAllPost } from '../../../features/post.reducers';
import CardSearch from './cardSearch';
import { setgetAll } from '../../../features/users.reducers';
import CardActivite from './cardActivite';
import '../../styles/search.scss'

const Search = () => {
    const [search, setSearch] = useState('');
    // const [users, setUsers] = useState([]);
  const [all, setAll] = useState(false);
  const [showCard, setShowCard] = useState(true)
  // const [familly, setfamily] = useState(user.nom - user.prenom)
  
 
  const user = useSelector((state) => state.user.user);
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

  const sendRquestUser = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_USER}/jwt`, {
      withCredentials: true
    })
      // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRquestUser().then((data) => {
      dispatch(setgetUsers(data.user))
    });
  })

    useEffect(() => {
      sendRquest().then((data) => {
        dispatch(setgetAll(data));
        
      });
    });

    return (
        <>
            {
          user ?
            <>
            <Navbar />
                  <div className="searchBox">
 
            <input  id="search" className="searchInput"type="text" name="" placeholder="Recherche"   onChange={(e) => {
                e.target.value.length >=1 && setSearch(e.target.value);
                setShowCard(false)
                setAll(true);
             
            }} />
            <button className="searchButton" href="#">
                <i className="material-icons">
                    search
                </i>
            </button>
            </div>
            {/* <div class="search__container">
    <p class="search__title">
        Go ahead, hover over search
    </p>
    <input class="search__input" type="text" placeholder="Search" />
</div> */}
            <br></br><br></br><br /><br /><br /><br />
            {
              showCard && 
              <>
              
                <h2 style={{textAlign:'center',padding:'5px',fontSize:'15px'}}>Quelques personnes dans le quartier de {user.quartier} que vous pouvez connaitre</h2>
                 <br></br>
                {
users ?
                  users.filter((el) => {
                          
             if (  el.activite?.toLocaleLowerCase().includes(user.activite?.toLocaleLowerCase()) && el.quartier?.toLocaleLowerCase().includes(user.quartier?.toLocaleLowerCase()))
                    {
                    return true
                  }
                  }).map((el) => {
                    return (
                      
                      <CardActivite el={el} />
                      
                    )
                  }) :<p> Chargement</p>
                }
              </>
        
             
         
              }
              
              

            
     {
              showCard === false &&  all && users.filter((el) => {
                if (
              el.activite?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return true ;
          }
                }).map((el) => {
                  return (
                    <CardSearch el={el} />
                  )
                })
              }

               {
              showCard === false &&  all && users.filter((el) => {
                if (
              el.prenom?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || el.nom?.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            {
              return true ;
          }
                }).map((el) => {
                  return (
                    <CardSearch el={el} />
                  )
                }).sort()
              }
  
           
          </> :
            <>
              <Notfound/>
              
       
                
  
                    </>
        }
        </>
    );
};

export default Search;