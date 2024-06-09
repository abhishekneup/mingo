
import loginCSS from "../styles/login.module.css"
import"../index.css"
import vase from "../assets/images/bird.jpg"

function Login() {

  
  

  return (
    <div className={loginCSS.loginMain}>
      <div className={loginCSS.LoginBOX}>
        <div className={loginCSS.ImgSide}>
        <img className={loginCSS.pic} src={vase} alt="pic"></img>
        </div>
      <div className={loginCSS.InputSide}>
        <h1 className={loginCSS.LoginText}>Login</h1>
            

            <form className={loginCSS.LoginForm}>

            <label>
              Email
            </label>
            <input
            type="email"
            placeholder="Enter Email"
            className={loginCSS.loginlabels}
            required
            /><br/>
            <label>Password</label>
            <input
            type="password"
            placeholder="Enter password"
            className={loginCSS.loginlabels}
            required
            /><br/>
            
           <button className={loginCSS.btn} type="submit">Login</button><br/>
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