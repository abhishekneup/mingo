import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function Home()
{
    return(
        <Router>
                <Routes>
                <Route path="/" element={<h2>Home</h2>}/>
                <Route path="/" element={<h2>Create Post</h2>}/>
                </Routes>
            </Router>

)
}