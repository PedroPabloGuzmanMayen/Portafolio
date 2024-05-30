import React from 'react'
import './Input.css'

const Input = ({value, onChange, onEnter, isDisabled }) => {
    return (
        <li className = 'Contain'>
            <label className = 'Container'>
              <span className = 'text'> $ ppgm@shell</span>
              <input
                type="text"
                value={value}
                onChange={onChange}
                className='input'
                onKeyDown = {onEnter}
                disabled = {isDisabled}
              />

            </label>
        </li>
    )
}

export default Input