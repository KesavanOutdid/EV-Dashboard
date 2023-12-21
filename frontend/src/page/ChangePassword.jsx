import React, { useState } from 'react';

function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (password !== confirmPassword) {
        setErrorMessage("Passwords don't match");
        setSuccessMessage('');
        } else if (!strongPasswordRegex.test(password)) {
        setErrorMessage('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
        setSuccessMessage('');
        } else {
        setErrorMessage('');
        setSuccessMessage('Passwords match and meet strength requirements');
        // Add logic here to send data to your backend or perform other actions
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
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
                                <h6 className="font-weight-light">Change password is easy. It only takes a few steps</h6>
                                <form className="pt-3" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-lg"   placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-lg"  placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                                    </div>
                                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                    {successMessage && <p className="text-success">{successMessage}</p>}
                                    <div className="mt-3">
                                        <button   type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Submit</button>
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

export default ChangePassword
