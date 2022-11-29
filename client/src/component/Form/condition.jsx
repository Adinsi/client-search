import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Condition = () => {
    return (

        <div>
        <AppBar position="static">
            <NavLink to='/'>
                <i style={{position:'absolute',top:'1%',fontSize:'30px',color:'white'}} className="fa-solid fa-arrow-left"></i>
            
            </NavLink>

         
            <Toolbar sx={{margin:'auto'}} variant="dense">
               
    <Typography  variant="body1" color="inherit" component="div">
    condition d'utilisation de SearchMeri
    </Typography>
  </Toolbar>
            </AppBar>
            <div style={{backgroundColor:'whitesmoke'}}>
                <h2 style={{textAlign:'center',padding:'10px'}}>Politique de Confidentialité</h2>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Qu’est-ce que la Politique de confidentialité et que couvre-t-elle ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Chez SearchMeri, nous souhaitons que vous compreniez quelles informations nous recueillons et comment nous les utilisons et les partageons. C’est pourquoi nous vous encourageons à lire notre Politique de confidentialité. Cela vous permet d’utiliser les Produits SearchMeri de la manière qui vous convient le mieux.
                    Dans cette Politique de confidentialité, nous expliquons comment nous recueillons, utilisons, partageons, stockons et transférons les informations. </p>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Quelles informations recueillons-nous ?</h3>
                <p style={{ textAlign: 'justify', padding: '10px', color: 'E7EAF0', lineHeight: '25px' }}>Sur SeachMeri, grâce à vos coordonnées, nous permettons à toutes personnes inscrites sur la plateforme d'entrer en contact avec vous. Pour garder votre numéro non identifiable, allez dans la page profil au niveau de la modification du profil, nous vous conseillons de mettre <span style={{ color: 'gray' }}>00000000</span> en rendant ces coordonnées inexistantes jusqu'au jour où vous décidez que vos contacts soient de nouveau accessibles, accessible sur la plateforme.
                    Ceci est la première version du site qui s'améliorera au fil du temps, nous sommes conscients que toutes les fonctionnalités ne sont encore opérationnels et nous vous promettons de l'améliorer dans le plus bref délai. 
                    Nous recueillons les contenus que vous créez sur les publications, vos, j'aime afin d'assurer que vous restez dans une communauté des personnes avec les mêmes ambitions que vous.
                </p>

             
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Comment utilisons-nous vos informations ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Nous utilisons les informations que nous reccueillons pour vous fournir une expérience personnalisée, par le biais de publicités notamment, ainsi qu’à d’autres fins expliquées en détail ci-dessous.
                </p>
                <h3 style={{textAlign:'left',padding:'10px',textDecoration:'underline',borderLeft:'3px solid #0E1D34',marginLeft:'10px'}}>Combien de temps conservons-nous vos informations ?</h3>
                    <h4>Pour offrir, personnaliser et améliorer nos Produits</h4>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>Nous conservons des informations tant que nous en avons besoin pour permettre aux réseau de s'élargir, respecter des obligations légales, ou protéger nos intérêts ou ceux d’autrui. Nous décidons combien de temps nous avons besoin des informations au cas par cas.</p>
                <h3 style={{ textAlign: 'left', padding: '10px', textDecoration: 'underline', borderLeft: '3px solid #0E1D34', marginLeft: '10px' }}>  Comment saurez-vous que la politique a été modifiée ?</h3>
                <p style={{textAlign:'justify',padding:'10px',color:'E7EAF0',lineHeight:'25px'}}>

Nous vous préviendrons avant d’apporter des modifications substantielles à la présente Politique. Vous aurez ainsi la possibilité d’examiner la Politique révisée avant de choisir si vous voulez continuer à utiliser nos Produits.
                </p>
                <h3 style={{ textAlign: 'left', padding: '10px', textDecoration: 'underline', borderLeft: '3px solid #0E1D34', marginLeft: '10px' }}> SearchMeri est t-elle payante ?</h3>
                <p style={{ textAlign: 'justify', padding: '10px', color: 'E7EAF0', lineHeight: '25px' }}>
                    L'utilisation de la plateforme est totalement gratuite à toutes personnes désirantes se fait connaître ou désirant se faire des connaissances avec les membres de son domaine d'activité. En janvier, toutes personnes désirant se faire valoir ses activités peut contacter l'agence qui lui permettra de faire passer sa page de vente en première ligne.
                </p>
                   <h3 style={{ textAlign: 'left', padding: '10px', textDecoration: 'underline', borderLeft: '3px solid #0E1D34', marginLeft: '10px' }}>Comment améliorons-nous la plateforme ?</h3>
                <p style={{ textAlign: 'justify', padding: '10px', color: 'E7EAF0', lineHeight: '25px' }}>
                    Grâce à vos suggestions, l'équipe de SearchMeri se forcera d'amélioré la plateforme selon vos désirs et vos gouts.
                </p>
            </div>
            <small style={{ textAlign:'center',color:'gray'}}>©2022 SearcMeri  Règles de confidentialité  Conditions d'utilisation</small><br></br>
            <small style={{ textAlign:'center',color:'gray'}}>Developed by Abdias Adinsi, Developer Fullstack at searchMeri</small>
        </div>
       
    );
};

export default Condition;