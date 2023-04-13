import React from "react";
import styles from "./Header.module.css"
import HeaderLogo from '../../public/assets/Logo.svg'

export function Header() {

    return (
        <header className={styles.headerLogo}>
            <img alt="Logo" src={HeaderLogo} />
        </header>

    )
}