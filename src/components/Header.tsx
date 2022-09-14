import React from "react";
import styles from "./Header.module.css"
export function Header() {

    return (
        <header className={styles.headerLogo}>
            <img alt="Logo" src="../../public/assets/Logo.svg" />
        </header>

    )
}