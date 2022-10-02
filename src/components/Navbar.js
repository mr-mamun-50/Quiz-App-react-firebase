import React from 'react'
import styles from '../styles/Navbar.module.css'
import Account from './Account'
import logo from '../assets/images/logo.png'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="/" className={styles.brand}>
                        <img src={logo} alt="Coding with Mamun Logo" />
                        <h3>Coding With Mamun</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    )
}
