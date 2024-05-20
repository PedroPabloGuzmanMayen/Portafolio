import React from 'react'
import './Input.css'

const Input = ({value, onChange }) => {
    return (
        <label className = 'Container'>
            <span className = 'text'>ppgm@shell</span>
            <input
                value={value}
                onChange={onChange}
                className="input"
            />

        </label>
    )
}

export default Input