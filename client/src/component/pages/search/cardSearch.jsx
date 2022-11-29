import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/cardSearch.scss';

const CardSearch = ({ el }) => {
   
    return (
          <NavLink key={el._id}  to={`/user_profil/${el._id}`} >

        <div className="container__profile">
    <img
     src={el.picture}
                alt="people" 
                
    />
    <div className="container__profile__text">
                    <h2>{el.nom} {el.prenom}</h2>
                <p>{el.activite} <b> dans le quartier de { el.quartier}</b></p>
                </div>
                <br></br>
            </div>

            <br></br>
            
          </NavLink>
    );
};

export default CardSearch;