import React from 'react'
import styles from '../styles/Button.module.css'

export default function Button({ children }) {
    return (
        <div className={styles.button}>
            <span>{children}</span>
        </div>
    )
}
