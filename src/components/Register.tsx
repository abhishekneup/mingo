

function Registration(){
    return(
        <div className="regbody">
            <div className="regbox">
                <form>
                    <h1>Register</h1>
                    <label>Display Name</label>
                    <input type="text" placeholder="Name"> </input>  
                    <label>Email</label>
                    <input type="email" placeholder="example@xyz.com"></input>   
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password"></input> 
                    <label>Confirm Password</label>
                    <input type="password " placeholder="Re-enter Password"></input>             
                </form>
            </div>
        </div>
    )
}

export default Registration;