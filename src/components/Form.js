import React from 'react'
import styles from '../styles/Form.module.css'

export default function Form({ children, className, ...rest }) {
    return (
        <form className={`${className} ${styles.form}`} action='#' {...rest}>
            {children}
        </form>
    )
}
