import LPcss from '../styles/LandingPage.module.css'
import vase from '../assets/images/doffy.png';


function Navbar()
{
    return(
    
      <div>

       <div className={LPcss.nav}>
          
          <h1 className={LPcss.logoName}>Mingo!</h1>
  
        <div className={LPcss.glasses}>

          <a href='#'><button className={LPcss.left}>Login</button></a>
          <a href='#'><button className={LPcss.right}>Register</button></a>
        
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

export default Navbar;