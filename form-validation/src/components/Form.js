import React, { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Method to submit the form
    const submitForm = () => {
        setIsSubmitted(true);
    }

    useEffect(() => {
        console.log(isSubmitted);
    }, [isSubmitted]);

    return (
        <>
            <div className="form-container">
                {isSubmitted && <AiOutlineCloseCircle className="close-btn" onClick={() => setIsSubmitted(false)} />}
                <div className="form-content-left">
                    <img src="images/img-2.svg" alt="Spaceship" className="form-img" />
                </div>
                {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
            </div>
        </>
    )
}

export default Form