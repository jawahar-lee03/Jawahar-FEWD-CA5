import React, {useState} from 'react';
import "./index.css"
import Main from './Main';

function Register(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
    // Validate the form fields
    if (username.length < 3 || username.length > 30) {
        setErrorMessage("Username must be between 3 and 30 characters");
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }
  
      if (password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
        setErrorMessage("Password must be at least 10 characters long and contain at least one special character");
        return;
      }
  
      if (password !== confirmPassword) {
        setErrorMessage("Confirm password does not match password");
        return;
      }
  
      setSubmitted(true);
    };
    if (submitted) {
        return <Main username={username} />;
    }
    return (
        <div className='flexBox' id='registerMain'>
            <div id='modal' className='flexBox'>
                <h1 id='registerH1'>Create Account</h1>
                {errorMessage && <p className="error" style={{color: "red"}}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        placeholder='UserName:'
                        type="text"
                        id="username"
                        className='inputBox'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <input
                        placeholder='Email:'
                        type="email"
                        id="email"
                        className='inputBox'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <input
                        placeholder='Password:'
                        type="password"
                        id="password"
                        className='inputBox'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div>
                        <input
                        placeholder='Confirm Password:'
                        type="password"
                        id="confirmPassword"
                        className='inputBox'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" id='register'>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;