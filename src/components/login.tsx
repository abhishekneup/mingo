
import { useEffect, useState } from "react";



const Login = () => {


  const[username, setUsername]= useState('');
  const[password, setPassword]= useState('');
  const[rememberMe, setRememberMe]= useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
   
    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
    // Clear input fields
    setUsername('');
    setPassword('');
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (

    <form onSubmit={handleSubmit}>
    <label>
      Username:
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>
    <br />
    <label>
      <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
      Remember Me
    </label>
    <br />
    <button type="submit">Login</button>
  </form>

      );
};

export default Login;
