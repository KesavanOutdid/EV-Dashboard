import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform API call for login
      const response = await fetch('http://192.168.1.70:9090/GetLoginDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      // alert(email )
      if (response.ok) {
        // const data = await response.json();
        // handleLogin(data);
        const data = await response.json();
        // Include email in the data sent to handleLogin
        handleLogin({ ...data, email }); // Adding email to the data object
      } else {
        // console.error('Login failed');
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setSuccessMessage('');
      if (error.response) {
        setErrorMessage(`Error Status Code: ${error.response.status}`);
      } else {
        setErrorMessage('An error occurred during login. Please try again later.');
      }
    }
  }; 

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo"> 
                  <img src="../../images/dashboard/EV_Power_16-12-2023.png" alt="logo"/>
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" onSubmit={handleLoginFormSubmit}>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  {errorMessage && <p className="text-danger">{errorMessage}</p>}
                  {successMessage && <p className="text-success">{successMessage}</p>}
                  <div className="mt-3">
                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <Link to="/ForgotPassword" className="auth-link text-black">Forgot password?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
