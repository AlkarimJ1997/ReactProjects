const validateInfo = values => {
    let errors = {};

    // Check if username is empty (whitespace doesn't count)
    if (!values.username.trim()) {
        errors.username = 'Username is required';
    }

    // Check if email is empty (whitespace doesn't count) or an invalid email
    if (!values.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Check if password is empty (whitespace doesn't count)
    if (!values.password.trim()) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    // Check if password2 is empty (whitespace doesn't count) or doesn't match password
    if (!values.password2.trim()) {
        errors.password2 = 'You must confirm your password';
    } else if (values.password !== values.password2) {
        errors.password2 = 'Passwords do not match';
    }

    return errors;
}

export default validateInfo;