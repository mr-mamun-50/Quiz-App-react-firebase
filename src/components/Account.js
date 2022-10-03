import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Account.module.css'

export default function Account() {
    return (
        <div className={styles.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/login">Login</Link>
            {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
        </div>
    )
}
