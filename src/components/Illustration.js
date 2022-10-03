import React from 'react'
import styles from '../styles/Illustration.module.css'

export default function Illustration({ alt, ...imgSrc }) {
    return (
        <div className={styles.illustration}>
            <img {...imgSrc} alt={alt} />
        </div>
    )
}
