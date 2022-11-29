import React from 'react';
import { NavLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CardActivite = ({el}) => {
    return (
        
             <NavLink key={el._id}  to={`/user_profil/${el._id}`} >

        <div className="container__profile">
    <img
     src={el.picture}
                alt="people" 
                
                />
            
               
    <div className="container__profile__text">
                    <h2>{el.nom} {el.prenom}
                        {(el.email === 'adinsiabdias@gmail.com') && <span style={{ color: 'blue', marginLeft: '10px' }}><CheckCircleIcon style={{ fontSize: 18 }} /></span>}
                       
                    </h2>
                <p>{el.activite} <b> dans le quartier de { el.quartier}</b></p>
                </div>
                <br></br>
            </div>

            <br></br>
            
          </NavLink>
    );
};

export default CardActivite;