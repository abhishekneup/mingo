import LPcss from '../styles/LandingPage.module.css'
import vase from '../assets/images/doffy.png';
import logo from '../assets/images/MINGO.png';
import Login from './login';
import Registration from './Register';
import Home from './Home';



const LandingPage = () => {
  const path = window.location.pathname;
  if (path === '/login') {
    return <Login />;
  }

  if (path === '/register') {
    return <Registration />;
  };

  if (path === '/home') {
    return <Home/>;
  };

     return(
    
    <div className={LPcss.main}>

        <div className={LPcss.nav}>
                  
                  <img src={logo} className={LPcss.logo} alt="logo"></img>
          
                <div className={LPcss.glasses}>

              <a href="/login"><button className={LPcss.left} >Login</button></a>
              <a href="/register"> <button className={LPcss.right} >Register</button></a>
                              
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