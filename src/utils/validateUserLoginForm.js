const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Username is Required';
    }

    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }

    if (values.username && (values.username.length < 6 || values.username.length > 15)) {
        errors.username = 'Username must be between 6 and 15 characters';
    }
    return errors;
};

export default validateUserLoginForm;