import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navegação.module.css";
function Navegação() {
    return (
        <nav className={styles.navbar}>
            

            <ul>
                <li><NavLink className={styles.navLink} to="/">Home</NavLink></li>
                <li><NavLink className={styles.navLink} to="/front">Frontend</NavLink></li>
                <li><NavLink className={styles.navLink} to="/programation">Programação</NavLink></li>
                <li><NavLink className={styles.navLink} to="/design">Design</NavLink></li>
                <li><NavLink className={styles.navLink} to='/top-sellers'>Mais vendidos</NavLink></li>

            </ul>
        
        </nav>
    
    );
}

export default Navegação;