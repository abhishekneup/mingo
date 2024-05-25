import LPcss from '../styles/LandingPage.module.css'
import vase from '../assets/images/doffy.png';
import { useState } from 'react';

type LandingPageProps = {
  onLoginClick: () => void;
  onRegisterClick: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick, onRegisterClick }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

     return(
    
    <div className='main'>

        <div className={LPcss.nav}>
                  
                  <h1 className={LPcss.logoName}>Mingo!</h1>
          
                <div className={LPcss.glasses}>

                    <button className={LPcss.left} onClick={onLoginClick}>Login</button>
                   <button className={LPcss.right} onClick={onRegisterClick}>Register</button>
                
                </div>
        </div>


         <div className={LPcss.container}>

                    <div className={LPcss.picture}>
                        <img src={vase} alt='picture'></img>
                    </div>
                <h1 className={LPcss.welcomeText}>Welcome to <span>Mingo!</span></h1>
         </div>
   
    </div>
     
    )
}

export default LandingPage;