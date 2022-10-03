import React from 'react'
import styles from '../styles/Navbar.module.css'
import Account from './Account'
import logo from '../assets/images/CODING_WITH_MAMUN.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/" className={styles.brand}>
                        <img src={logo} alt="Coding with Mamun Logo" />
                        <h3>Coding With Mamun</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    )
}
