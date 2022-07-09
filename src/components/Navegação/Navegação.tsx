import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navegação.module.css";
interface INavLinkProps{
    isActive: boolean;
}
const Navegação: React.FC = () => {
    const navLinkStyles = ({ isActive }: INavLinkProps) => {
        return {
            textDecoration: isActive ? "underline" : "none",
            fontWeight:isActive?"bold":"normal"
        }
    }
    return (
        <nav className={styles.navbar}>
            

            <ul>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/">Home</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/front">Frontend</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/programation">Programação</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/design">Design</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to='/top-sellers'>Mais vendidos</NavLink></li>

            </ul>
        
        </nav>
    
    );
}

export default Navegação;