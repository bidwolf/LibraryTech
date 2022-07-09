import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Design from "../components/Books/Design";
import Frontend from "../components/Books/Frontend";
import MaisVendidos from "../components/Books/MaisVendidos";
import Programacao from "../components/Books/Programacao";
const MainPage = () => {
    const { slug } = useParams<{ slug: string }>();
    function contentBooks (slug: string) {
        switch (slug) {
            case 'design':
                return <Design />

            case 'programation':
                return <Programacao />
            case 'front':
                return <Frontend />
            case 'top-sellers':
                return <MaisVendidos />
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