import LPcss from '../styles/LandingPage.module.css'
import vase from '../assets/images/doffy.png';


function LandingPage()
{
    return(
    
      <div>

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