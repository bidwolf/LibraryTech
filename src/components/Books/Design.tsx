import Card from "../Card/Card";
import styles from "./Books.module.css";
interface IGetBooksQueryResponse {
    books: book[]
}
interface book {
    title: string
    description: string
    isbn: string
    cover: string

}
function Design({ books }:IGetBooksQueryResponse) {
    
      
    
     return (
         <main className={styles.principal}>
             
            <header className={styles.home__header}>
                <h2>Design</h2>
            </header>
            <div className={styles.main}>
                
                 <Card books={books}/>
                
            </div>
        </main>
    );
}

export default Design;