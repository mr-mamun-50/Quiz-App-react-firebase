import React from 'react'
import styles from '../styles/Video.module.css'
import thumb from '../assets/images/3.jpg'

export default function Video() {
    return (
        <a href="quiz.html">
            <div className={styles.video}>
                <img src={thumb} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={styles.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    )
}
