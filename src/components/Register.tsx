import RegisterCSS from "../styles/register.module.css"
import mingo from "../assets/images/vase.png"
import { useState } from "react";
import {auth} from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Registration(){
    const[FirstName, setFirstName]=useState("");
    const[LastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [ConfirmPassword, setConfirmPassword]=useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const SignIN = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent page refresh
  
      if (password !== ConfirmPassword) {
        setErrorMessage("Passwords do not match!");
        return;
      }
  
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Handle successful registration
      } catch (error) {
        // Safely handle 'error' of type 'unknown'
        if (error instanceof Error) {
          setErrorMessage(error.message); // Access 'message' safely
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      }
    };
  
  return(
        <div className={RegisterCSS.RegMain}>
      <div className={RegisterCSS.RegBOX}>
        <div className={RegisterCSS.ImgSide}>
        <img className={RegisterCSS.pic} src={mingo} alt="pic"></img>
        </div>
      <div className={RegisterCSS.InputSide}>

            <form className={RegisterCSS.RegForm} onSubmit={SignIN}>
              <div className={RegisterCSS.Names}>
            <div className={RegisterCSS.FirstName}>
              
            <label>First Name</label>
            <input
            type="text"

            onChange={(e)=>setFirstName(e.target.value)}

            placeholder="First Name"
            className={RegisterCSS.ReglabelsNames}
            required>
            </input>
              </div>

            <div className={RegisterCSS.FirstName}>

            <label>Last Name</label>
            <input
            type="text"

            onChange={(e)=>setLastName(e.target.value)}

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

            onChange={(e)=>setEmail(e.target.value)}

            placeholder="Enter Email"
            className={RegisterCSS.Reglabels}
            required
            /><br/>


            <label>Password</label>
            <input
            type="password"
            
            onChange={(e)=>setPassword(e.target.value)}

            placeholder="Enter password"
            className={RegisterCSS.Reglabels}
            required
            />
            <br/>

            <label>Confirm Password</label>
            <input
            type="password"
            
            onChange={(e)=>setConfirmPassword(e.target.value)}

            placeholder="Re-enter password"
            className={RegisterCSS.Reglabels}
            required></input>
            <br/>
            {errorMessage && <p className={RegisterCSS.error}>{errorMessage}</p>}
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