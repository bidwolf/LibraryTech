import React from "react";
import styles from "./Card.module.css"
interface IGetBooksQueryResponse {
    books: book[]
}
interface book {
    title: string
    description: string
    isbn: string
    cover: string

}

const Card: React.FC<IGetBooksQueryResponse> = ({books}:IGetBooksQueryResponse) =>{
    
    return (
        <>
            
        {
            
            books.map((books) => (
                
        <div className={styles.card}>
            <div className={styles.thumb}>
                <img src={ books.cover} alt={"Capa do livro "+books.title}/>
            </div>
            <div className={styles.details}>
                <h3 className={styles.title}>{ books.title}</h3>
                <p className={styles.description}>{books.description}</p>
            </div>
        </div>
            ))
        }
        </>
    );
}

export default Card;