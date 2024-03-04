import React from 'react'

const Button = (
    {
        type,
        children,
        onClick,
        className,
        disabled = false,
    }
) => {
    return (
        <button
        type={type}
        onClick={onClick}
        className={className}
        disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
