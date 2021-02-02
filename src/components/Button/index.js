import React from 'react';
import './styles.scss';



const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btm--medium',
    'btn--large'
]




function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];

    return (
        <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}

export default Button
