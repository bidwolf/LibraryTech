import React from "react";
import styles from "./Footer.module.css";
function Footer() {
    return ( 
        <footer className={styles.footer}>
        <p>
          Conteúdos cedidos pela Editora Novatec &#8212; Copyright 2020
        </p>
        <p>
          Feito por <a href='https://github.com/bidwolf'>Henrique de Paula Rodrigues</a>
        </p>
      </footer>
     );
}

export default Footer;