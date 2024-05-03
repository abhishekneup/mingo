import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/login';
import Registration from './components/Register';

const App = () => {
  return (
    <div>
        <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
        </Switch>
      </div>
    </Router>
        
      </div>
  );
};

export default App;
