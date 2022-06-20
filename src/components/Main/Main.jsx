import React from "react";
import Home from "../Home/Home";
import styles from "./Main.module.css"
function Principal() {
    return ( 
        <main className={styles.principal}>
            <Home/>
      </main>
     );
}

export default Principal;