import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.container}>
                    {children}
                </div>
            </main>
        </>
    )
}
