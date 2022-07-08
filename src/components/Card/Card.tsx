import React from "react";
import styles from "./Card.module.css"
interface IProps{
    dados: IBooks[];
}
interface IBooks{  
    imagem: {
        src: string;
        alt: string;
    };

    title: string;
    description: string;
    link: string;
}

const Card :React.FC<IProps>=({dados}:IProps) =>{
    
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