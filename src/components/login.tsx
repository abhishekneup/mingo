import LoginCSS from'../styles/login.module.css' 

const Login = () =>
{
    return(
        <div className={LoginCSS.main}>

        <div className={LoginCSS.container}>
            <h1 className={LoginCSS.TextHead}>Login</h1>
            <form>
            <label>Email</label>
            <input type="email" placeholder="example@xyz.com"></input>
            <label>Password</label>
            <input type="password" placeholder="Enter Password"></input>
            <a href="#">Forgot Password?</a>
            </form>

        </div>
        </div>
    )

}

export default Login;