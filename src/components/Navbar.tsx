
import LPcss from '../styles/LandingPage.module.css'

    function Navbar () {
    return(
        <div>
        <div className={LPcss.nav}>
          
          <h1 className={LPcss.logoName}>Mingo!</h1>
  
        <div className={LPcss.glasses}>

         <a href='Login'><button className={LPcss.left}>Login</button></a>
         <a href='/Register'><button className={LPcss.right}>Register</button></a>
        
        </div>
       </div>
        </div>
    )
}

export default Navbar;