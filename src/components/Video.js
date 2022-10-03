import React from 'react'
import styles from '../styles/Video.module.css'
import thumb from '../assets/images/3.jpg'

export default function Video() {
    return (
        <div className={styles.video}>
            <img src={thumb} alt="" />
            <p>Laravel 9 multi auth | Laravel user and admin login register</p>
            <div className={styles.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    )
}
