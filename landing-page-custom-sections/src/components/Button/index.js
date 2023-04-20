import React from 'react';
import './Button.css';

const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {
    // Constants for button styles
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
    const COLORS = ['primary', 'blue', 'red', 'green'];

    // Set button styles
    const btnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const btnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const btnColor = COLORS.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`btn ${btnStyle} ${btnSize} ${btnColor}`}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    )
}

export default Button