
import loginCSS from "../styles/login.module.css"
import"../index.css"
import vase from "../assets/images/bird.png"

function Login() {
 

  

  return (
    <div className={loginCSS.loginMain}>
      <div className={loginCSS.LoginBOX}>
        <div className={loginCSS.ImgSide}>
        <img className={loginCSS.pic} src={vase} alt="pic"></img>
        </div>
      <div className={loginCSS.InputSide}>

            <form className={loginCSS.LoginForm}>

            <label>
              Email
            </label><br/>
            <input
            type="email"
            placeholder="Enter Email"
            className={loginCSS.loginlabels}
            required
            /><br/>
            <label>password</label><br/>
            <input
            type="password"
            placeholder="Enter password"
            className={loginCSS.loginlabels}
            required
            /><br/>
            
            <button type="submit">Login</button><br/>
            </form>
            
          <div className={loginCSS.Rember}>
          <input type="checkbox"></input>
          <label>Remember me</label>
          
       </div>
      
      </div>
            </div>

    </div>
  );
}

export default Login;