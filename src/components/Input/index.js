import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.module.scss'
import { isEmpty } from 'lodash'
function Input(props) {
    const {
        type = 'text',
        onChange = (e) => { },
        label = '',
        placeholder = '',
        block = false,
        rounded = false,
        required = false,
        value = '',
        name = '',
        icon = '',
        white = false,
        bordered = false,
    } = props || {}
    return (
        <div className={classes.input_container}>
            <label>{label}</label>
            <div className={!isEmpty(icon) ? classes.input_main : ''}>
                {
                    !isEmpty(icon) &&
                    <div className={classes.input_icon}>{ icon }</div>
                }
                <input
                    type={type || 'text'}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${classes.input} ${block ? classes.block : ''} ${isEmpty(icon) && rounded ? classes.rounded : classes.input_radius} ${white ? classes.white : ''} ${bordered ? classes.border : ''}`}
                    required={required}
                    value={value}
                    name={name}
                />
            </div>
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    block: PropTypes.bool,
    rounded: PropTypes.bool,
    required: PropTypes.bool,
    icon: PropTypes.string,
    white: PropTypes.bool,
    bordered: PropTypes.bool,
}

export default Input

