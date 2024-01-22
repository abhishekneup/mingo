import '../styles/navbar.css'
import vase from '../assets/images/doffy.png';


function Navbar()
{
    return(
    
      <div>

       <div className="nav">
          
          <h1 className='logoName'>Mingo !</h1>
  
        <div className="glasses">

          <a href='#'><button className='left'>Login</button></a>
          <a href='#'><button className='right'>Register</button></a>
        
        </div>
       </div>

         <div className="container">

         <div className="picture">
             <img src={vase} alt='picture'></img>
         </div>
         <h1 className='welcomeText'>Welcome to <span>Mingo!</span></h1>
         
     </div>
   
      </div>
     
    )
}

export default Navbar;