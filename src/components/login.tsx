import { useState } from 'react';
import styles from "../styles/login.module.css"  



const Login = () => {

  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  const[rememberME, setRememberMe]=useState(false);  

  return (
    
    <div>

      <div className='flex flex-col justify-center items-center'>
        <h1>Loginm</h1>

      </div>
    </div>
   
  );
};

export default Login;
