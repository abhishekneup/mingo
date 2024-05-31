import LPcss from '../styles/LandingPage.module.css'
import vase from '../assets/images/doffy.png';
import logo from '../assets/images/MINGO.png';
import { useState } from 'react';

type LandingPageProps = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

     return(
    
    <div className={LPcss.main}>

        <div className={LPcss.nav}>
                  
                  <img src={logo} className={LPcss.logo} alt="logo"></img>
          
                <div className={LPcss.glasses}>

                    <button className={LPcss.left} onClick={onLoginClick}>Login</button>
                   <button className={LPcss.right} onClick={onRegisterClick}>Register</button>
                
                </div>
        </div>


         <div className={LPcss.container}>

                <h1 className={LPcss.welcomeText}>Welcome to <span><p className={LPcss.spanMingo}>Mingo!</p></span></h1>
                    <div className={LPcss.picture}>
                        <img src={vase} style={{width:'70%'}} alt='picture'></img>
                    </div>
         </div>
   
    </div>
     
    )
}

export default LandingPage;