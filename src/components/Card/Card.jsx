import React from "react";
import styles from "./Card.module.css"
function Card({dados}) {
    
    return (
        <>
            
        {
            
            dados.map((books) => (
                
        <div className={styles.card}>
            <div className={styles.thumb}>
                <img src={ books.imagem.src} alt={books.imagem.alt}/>
            </div>
            <div className={styles.details}>
                <h3>{ books.title}</h3>
                <p>{books.description}</p>
                <a href={books.link}>Leia mais &gt;</a>
            </div>
        </div>
            ))
        }
        </>
    );
}

export default Card;