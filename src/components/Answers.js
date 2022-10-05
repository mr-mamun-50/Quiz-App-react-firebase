import React from 'react'
import styles from '../styles/Answers.module.css'
import CheckBox from './CheckBox'

export default function Answers({ options = [], handleChange }) {
    return (
        <div className={styles.answers}>
            {options.map((option, index) => (
                <CheckBox className={styles.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} />
            ))}
        </div>
    )
}
