import Card from "../Card/Card";
import styles from "./Home.module.css"
import { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ENTITY_QUERY = gql`
query QueryBooks {
  books {
    title
    description
    isbn
    cover
  }
}
`
interface IGetBooksQueryResponse {
    books: book[]
}
interface book {
    title: string
    description: string
    isbn: string
    cover: string

}
function Home() {
    const { data } = useQuery<IGetBooksQueryResponse>(GET_ENTITY_QUERY);
    console.log(data)
    return (
        <Fragment>
            <header className={styles.home__header}>
                <h2>Últimos Lançamentos</h2>
            </header>
            <div className={styles.main}>
                {
                 data?<Card books={data.books}/>:<p> no books found</p>
                }
            </div>
        </Fragment>
    );
}

export default Home;