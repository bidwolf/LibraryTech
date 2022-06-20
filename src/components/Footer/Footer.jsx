import React from "react";
import styles from "./Footer.module.css";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
function Footer() {
    return ( 
      <footer className={styles.footer}>
        <h3 className={styles.contact}>
          Developed by Henrique de Paula Rodrigues
        </h3>
        <div className={styles.socials}>
          <SocialNetwork name="Github" link="https://github.com/bidwolf" icon={{ src: "imagens/github.svg", alt: "logo do github" }} />
          <SocialNetwork name="Linkedin" link="https://www.linkedin.com/in/henriquedepaularodrigues/" icon={{ src: "imagens/linkedin.svg", alt: "logo do linkedin" }} />
          <SocialNetwork name="Instagram" link="https://www.instagram.com/henrique._.exe/" icon={{ src: "imagens/instagram.svg", alt: "logo do instagram" }} />
          <SocialNetwork name="Twitter" link="https://twitter.com/henrique_exe" icon={{ src: "imagens/twitter.svg", alt: "logo do twitter" }} />
        </div>
        <h3 className={styles.enterprise}>
            LibraryTech &#8212; Copyright 2022
        </h3>
        </footer>
     );
}
//Adicionar Componente de Redes Sociais no footer 
export default Footer;