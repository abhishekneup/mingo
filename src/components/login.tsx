
import loginCSS from "../styles/login.module.css"
import"../index.css"
import vase from "../assets/images/bird.jpg"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


function Login() {

  
  const [email, setEmail]=useState("");
  const [password,setPassword]=useState("");

  const LogSignIn=async ()=>{

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed!');
    }

  };

  


  return (
    <div className={loginCSS.loginMain}>
      <div className={loginCSS.LoginBOX}>
        <div className={loginCSS.ImgSide}>
        <img className={loginCSS.pic} src={vase} alt="pic"></img>
        </div>
      <div className={loginCSS.InputSide}>
        <h1 className={loginCSS.LoginText}>Login</h1>
            

            <form className={loginCSS.LoginForm} onSubmit={LogSignIn}>

            <label>
              Email
            </label>
            <input
            type="email"
            placeholder="Enter Email"

            onChange={(e)=>setEmail(e.target.value)}

            className={loginCSS.loginlabels}
            required
            /><br/>
            <label>Password</label>
            <input
            type="password"
            placeholder="Enter password"

            onChange={(e)=>setPassword(e.target.value)}

            className={loginCSS.loginlabels}
            required
            /><br/>
            
           <button className={loginCSS.btn} type="submit" >Login</button><br/>
            </form>
          
            
          <div className={loginCSS.Remember}>
          <input type="checkbox" aria-label="Remember me"></input>
          <a href="/home"> <label>Remember me</label></a>
            <a href="/register">
          <p className={loginCSS.RegisterHere}>
          Else, Register Here
          </p>
          </a>
          
       </div>
      
      </div>
            </div>

    </div>
  );
}

export default Login;