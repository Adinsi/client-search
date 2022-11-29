import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


  
const Notfound = () => {
    const [error,setError] = useState('')
    useEffect(() => {
        setError('')
        if (navigator.onLine) {
     setError("")
        }
        else {
          setError("Connexion non active, vérifiez votre connexion puis réessayer!")
        }
},[])
    return (
        <div style={{backgroundColor:'#FDFDFD',overflowY:'hidden'}}>
             {/* <NavLink to='/'>
                <i style={{position:'absolute',top:'1%',fontSize:'30px',color:'#fff'}} className="fa-solid fa-arrow-left"></i>
            
            </NavLink> */}
            {/* <i style={{ width: '100vw', height: '100vh' }} className="fas fa-spinner fa-spin"></i> */}

            <img style={{ width: '100vw', height: '100vh', objectFit: 'contain' }} src='./uploads/loading.gif'  alt='git_error_404' />
            <p style={{ position: 'absolute', top: '20%', left: '20%' , zIndex: '100', color: 'white', fontSize: '22px' }}>{error}</p>
        </div>
    );
};

export default Notfound;