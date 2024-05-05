import LandingPage from './components/LandingPage';
import Login from './components/login';
import Registration from './components/Register';

const App = () => {

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleRegisterClick = () => {
    window.location.href = '/register';
  };

  const path = window.location.pathname;

  if (path === '/login') {
    return <Login />;
  }

  if (path === '/register') {
    return <Registration />;
  }


  return (
    <div>
    <LandingPage onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      </div>
  );
};

export default App;
