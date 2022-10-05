import React from 'react'
import styles from '../styles/Button.module.css'

export default function Button({ className, children, ...rest }) {
    return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
    )
}
