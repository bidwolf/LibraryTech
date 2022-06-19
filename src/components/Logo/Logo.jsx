import React from "react";
import styles from "./Logo.module.css";
const Logo = () => {
    return (
        
        
        <a href="#">
            <div className={styles.logo}>
                <div className={styles.imagem}>
                    <img src="./imagens/logo.svg"alt="logo da library tech"></img>
                </div>
                <h1>LibraryTech</h1>
            </div>
        </a>
    );
};
export default Logo;
