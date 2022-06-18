import React from "react";
import styles from "./Logo.module.css";
const Logo = () => {
    return (
        <a href="#">
            <div className={styles.logo}>
            <img src="./imagens/logo.svg"alt="logo da library tech"></img>
            <h1>LibraryTech</h1>
            </div>
        </a>
    );
};
export default Logo;
