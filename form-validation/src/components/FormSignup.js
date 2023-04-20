import React from 'react'
import useForm from './hooks/useForm'
import validateInfo from './validateInfo';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    // Custom hooks
    const { handleChange, formConfig,
        formErrors, handleSubmit } = useForm(validateInfo, submitForm);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value={formConfig.username}
                        onChange={handleChange} />
                    {formErrors.username && <p>{formErrors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={formConfig.email}
                        onChange={handleChange} />
                    {formErrors.email && <p>{formErrors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={formConfig.password}
                        onChange={handleChange} />
                    {formErrors.password && <p>{formErrors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Confirm Password</label>
                    <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm your password"
                        value={formConfig.password2}
                        onChange={handleChange} />
                    {formErrors.password2 && <p>{formErrors.password2}</p>}
                </div>
                <button type="submit" className="form-input-btn">Sign Up</button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup