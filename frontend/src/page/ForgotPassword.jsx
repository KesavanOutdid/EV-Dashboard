import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.70:9090/GetForgotPasswordDetails', {
        email: email,
      });
      if (response.status === 200) {
        setErrorMessage('');
        successMessage('Forgot password Successful!');  
        // Redirect to the login page after successful forgot password
        history.push('/');
      } else {
        setSuccessMessage('');
        setErrorMessage('Forgot password failed. Please check your credentials.');
        console.error('Forgot password failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('');
      if (error.response) {
        setErrorMessage(`Error Status Code: ${error.response.status}`);
        console.error('Error Status Code:', error.response.status);
      } else {
        setErrorMessage('An error occurred during forgot password. Please try again later.');
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
                <h4>Forgot Your Password!</h4>
                <h6 className="font-weight-light">Forgot in to continue.</h6>
                <div className="pt-3">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {errorMessage && <p classNameName="text-danger">{errorMessage}</p>}
                    {successMessage && <p classNameName="text-success">{successMessage}</p>}
                    <button   onClick={handleForgotPassword} className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
