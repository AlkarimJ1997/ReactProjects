import React, { useState, useEffect, useCallback } from 'react'

const useForm = (validateInfo, callback) => {
    // States, references
    const [formConfig, setFormConfig] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // If there are no errors, then submit the form 
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            callback();
        }
    }, [formErrors])

    // Method to update a field in the form config
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormConfig({ ...formConfig, [name]: value });
    }

    // Method to handle the submission of the form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form (set any errors)
        setFormErrors(validateInfo(formConfig));

        // Set the isSubmitting state to true
        setIsSubmitting(true);
    }

    return { handleChange, formConfig, formErrors, handleSubmit };
}

export default useForm