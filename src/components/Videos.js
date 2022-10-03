import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Videos.module.css'
import Video from './Video'

export default function Videos() {
    return (
        <div className={styles.videos}>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
        </div>
    )
}
