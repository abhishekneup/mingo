import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./login"
import Registration from "./Register"


const Home=()=>
{
    return(
        <Router>
                <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Registration/>}/>
                </Routes>
            </Router>

)
}

export default Home