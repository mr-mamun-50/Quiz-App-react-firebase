import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
