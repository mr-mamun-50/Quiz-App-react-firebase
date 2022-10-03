import React from 'react'
import styles from '../styles/Answers.module.css'
import CheckBox from './CheckBox'

export default function Answers() {
    return (
        <>
            <div className={styles.answers}>
                <CheckBox className={styles.answer} text="Answer one" />
            </div>
        </>
    )
}
