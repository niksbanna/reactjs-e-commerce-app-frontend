import React from 'react';
import './FormInput.scss';

export default function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {label ? (
                <label
                    className={`${otherProps.value.lenght ? 'shrink' : ''
                        } form-input-label`}
                >
                    {label}
                </label>
            ) : null
            }
        </div>
    )
}