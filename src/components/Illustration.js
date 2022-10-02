import React from 'react'
import styles from '../styles/Illustration.module.css'
import signUpImg from '../assets/images/signup.svg'

export default function Illustration() {
    return (
        <div className={styles.illustration}>
            <img src={signUpImg} alt="Signup" />
        </div>
    )
}
