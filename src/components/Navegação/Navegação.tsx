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
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/Frontend">Frontend</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/Programação">Programação</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to="/Design">Design</NavLink></li>
                <li><NavLink className={styles.navLink} style={ navLinkStyles} to='/Top-sellers'>Mais vendidos</NavLink></li>

            </ul>
        
        </nav>
    
    );
}

export default Navegação;