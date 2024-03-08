import React from 'react'

const Input = ({
    type = "text",
    name,
    className,
    label,
    onChange,
    value,
    placeholder,
    required = false,
}) => {
    return (
        <div className='flex justify-between gap-2 flex-col my-5'>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className={className}
                value={value}
            />
        </div>
    )
}

export default Input
