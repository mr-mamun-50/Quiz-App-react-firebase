import React from 'react'
import styles from '../styles/Videos.module.css'
import Video from './Video'

export default function Videos() {
    return (
        <div className={styles.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
}
