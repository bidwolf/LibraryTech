import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
const Logo = () => {
    return (
        
        
        <Link to="/">
            <div className={styles.logo}>
                <div className={styles.imagem}>
                    <img src="./imagens/logo.svg"alt="logo da library tech"></img>
                </div>
                <h1>LibraryTech</h1>
            </div>
        </Link>
    );
};
export default Logo;
