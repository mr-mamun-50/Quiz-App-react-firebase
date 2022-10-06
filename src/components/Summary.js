import React from 'react'
import styles from '../styles/Summary.module.css'
import successImg from '../assets/images/success.png'

export default function Summary({ score, noq }) {
    return (
        <div className={styles.summary}>
            <div className={styles.point}>
                <p className={styles.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            <div className={styles.badge}>
                <img src={successImg} alt="Success" />
            </div>
        </div>
    )
}
