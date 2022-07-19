import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Design from "../components/Books/Design";
import Frontend from "../components/Books/Frontend";
import MaisVendidos from "../components/Books/MaisVendidos";
import Programação from "../components/Books/Programacão";
import { gql,useQuery } from "@apollo/client";
const GET_BOOKS_BY_SLUG = gql`
query MyQuery ($category:String){
  books(where: {category:$category}) {
    title
    price
    isbn
    description
    cover
  }
}
`;
interface IGetBooksQueryResponse {
    books: book[]
}
interface book {
    title: string
    description: string
    isbn: string
    cover: string

}
const MainPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data } = useQuery<IGetBooksQueryResponse>(GET_BOOKS_BY_SLUG, {
        variables: {
            category:slug
        }
    });
    function contentBooks (slug: string) {
        switch (slug) {
            case 'Design':
                return data ? <Design books={ data.books} />:<p> not found books</p>

            case 'Programação':
                return data ? <Programação books={ data.books} />:<p> not found books</p>
            case 'Frontend':
                return data?<Frontend books={data.books}/>:<p>not found books</p>
            case 'Top-sellers':
                 return data? <MaisVendidos books={data.books}/>:<p> not found books</p>
            default:
                break;
        }
    }

    return (
        <Fragment>
            <Header />
            {slug ?
                contentBooks(slug) : <Main />
            }
            <Footer />
        </Fragment>
    );
}

export default MainPage;