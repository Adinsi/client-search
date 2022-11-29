import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setgetUsers } from '../../features/user.reducers';
import Navbar from '../navigation/navbar';
import Notfound from './notfound';
axios.defaults.withCredentials = true;

const Help = () => {
       const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const [likePost, setLikesPost] = useState('');
    console.log(likePost)
    

    
    const sendRquest = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_URL_USER}/jwt`,
      {
        withCredentials: true,
      }
    );
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
    };
    
    useEffect(() => {
        sendRquest().then((data) => {
      dispatch(setgetUsers(data.user));
    });
    })
  
    return (
        <>
            { 
                  <>
                    <Navbar />  
                             <div>
                       
                        <h3 style={{textAlign:'center',padding:'5px',fontSize:''}}>Que pouvons nous faire ?</h3>
                        <h3 style={{padding:'5px',fontSize:''}}>Bésoin d'aide pour la connexion ?</h3>
                    
                        <h3  style={{textAlign:'center', padding:'5px',fontSize:'15px',color:'#0E1D34'}}>Connecter vous a votre compte</h3>
                        <p  style={{ padding:'5px',fontSize:'16px',color:'#0E1D34'}}>Pour vous connecter à votre compte SearchMeri sur un ordinateur ou sur votre télephone :

                            Accédez à SearchMeri.com.
                            Remplissez le fromulaire avec :</p>
                            <ul style={{padding:'20px',lineHeight:'40px', margin:'15px',backgroundColor:'gray',fontSize:'18px',fontFamily:'Roboto',listStyle:'none',color:'black'}}>
                                <li style={{}}>  <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Nom :</span>  Votre nom de famille</li>
                                <li>
                            <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Prenom :</span>  Votre prénom ou votre pseudo</li>
                                <li> <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Adress-Email :</span>  vous pouvez vous connecter avec n’importe quelle adresse e-mail répertoriée sur votre compte SearchMeri.</li>
                                <li>
                             <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Numéro de téléphone :</span> si vous avez confirmé un numéro de mobile sur votre compte, vous pouvez le saisir ici (n’ajoutez pas de zéro devant l’indicatif national ni aucun autre symbole).</li>
                                <li>  <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Activité :</span>  Saissisez le domaine dans lequel vous exercez.</li>
                                <li>    <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Quartier :</span>  Mettez le quartier dans lequel vous êtes. S'il arrivait que vous avez mal tapé le nom de votre quartier, renseignez-vous du vrai nom et  dans la rubrique Mon Profil, modifiez-le.</li>
                                <li>Cliquez sur Mot de passe et saisissez votre mot de passe.</li>
                                <li>Cliquez sur  <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Se connecter</span> .</li>
                            </ul>
                          

                           
                         
                         

    <h3 style={{padding:'5px',fontSize:''}}>Si vous ne parvenez pas à vous connecter :</h3>
                           
                            <h3 style={{ textAlign: 'center', padding: '5px', fontSize: '18px', color: '#0E1D34' }}>Si vous rencontrez des difficultés avec votre mot de passe, découvrez comment le réinitialiser si vous êtes connecté.</h3>
                             <ul style={{padding:'20px',lineHeight:'40px', margin:'15px',backgroundColor:'gray',fontSize:'18px',fontFamily:'Roboto',listStyle:'none',color:'black'}}>
                                <li style={{}}>  <span style={{color:'#0E1D34',fontSize:'18px',fontWeight:'bolder'}}>Revenir au page de connexion en vous déconnectant: </span>  Dans la page profil, dans  "Mon Profil", au coin supérieur gauche, cliquez sur le bouton déconnecter. </li>
                                <li>
                                    <span style={{ color: '#0E1D34', fontSize: '18px', fontWeight: 'bolder' }}>Une fois sur la page de connexion:</span>  Cliquez sur mot de passe oublié et suivez les instructions.</li>
                                <li>
                                    <span style={{ color: '#0E1D34', fontSize: '18px', fontWeight: 'bolder' }}>Si vous n'ètes pas connecté :</span>  Cliquez sur mot de passe oublié et suivez les instructions.</li>
                           
                                
                            </ul>


                      
                        <a style={{margin:'auto'}} href='mailto:adinsiabdias@gmail.com'>Envoyer nous un émail</a><br></br>
                         <a href='tel:53037832'>Ecrivez nous sur whatsapp avec ce numéro</a>
                        
          </div>
           
                </> 
        }
        </>
    );
};

export default Help;