import RegisterCSS from "../styles/register.module.css"
import mingo from "../assets/images/vase.png"
function Registration(){
    return(
        <div className={RegisterCSS.RegMain}>
      <div className={RegisterCSS.RegBOX}>
        <div className={RegisterCSS.ImgSide}>
        <img className={RegisterCSS.pic} src={mingo} alt="pic"></img>
        </div>
      <div className={RegisterCSS.InputSide}>

            <form className={RegisterCSS.RegForm}>
              <div className={RegisterCSS.Names}>
            <div className={RegisterCSS.FirstName}>
              
            <label>First Name</label>
            <input
            type="text"
            placeholder="First Name"
            className={RegisterCSS.ReglabelsNames}
            required>
            </input>
              </div>

            <div className={RegisterCSS.FirstName}>

            <label>Last Name</label>
            <input
            type="text"
            placeholder="Last Name"
            className={RegisterCSS.ReglabelsNames}
            required>
            </input>
              </div>
              
              </div>
            <br></br>
            <label>
              Email
            </label>

            <input
            type="email"
            placeholder="Enter Email"
            className={RegisterCSS.Reglabels}
            required
            /><br/>
            <label>Password</label>
            <input
            type="password"
            placeholder="Enter password"
            className={RegisterCSS.Reglabels}
            required
            />
            <br/>
            <label>Confirm Password</label>
            <input
            type="password"
            placeholder="Re-enter password"
            className={RegisterCSS.Reglabels}
            required></input>
            <br/>
            
            <button className={RegisterCSS.btn} type="submit">Register</button><br/>
            </form>
            
          <div className={RegisterCSS.already}>
          
          <p className={RegisterCSS.RegisterHere}>Already have an account? <a href="/login">
          Login Here
          </a>
          </p>
          
       </div>
      
      </div>
            </div>

    </div>
       
    )
}

export default Registration;