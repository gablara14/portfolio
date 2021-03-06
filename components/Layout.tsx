import React from 'react'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Meta/>
            <div className={styles.container} >
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout