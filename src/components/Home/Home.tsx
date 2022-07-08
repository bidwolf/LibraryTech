import Card from "../Card/Card";
import styles from "./Home.module.css"
import { Fragment } from "react";
const dados = [
    {
        imagem: {
            src: "imagens/capas/react.jpg",
            alt: "Capa do livro React"
        },
        title: "React para iniciantes",
        description: "Iniciando no react você vai aprender...",
        link: "#React"
    },
    {
        imagem: {
            src: "imagens/capas/node_express.jpg",
            alt: "Capa do livro de Node e Express"
        },
        title: "Programação Web com Node e Express",
        description: "Construa aplicações web dinâmicas com o express...",
        link: "#Express"
    },
    {
        imagem: {
            src: "imagens/capas/node_express.jpg",
            alt: "Capa do livro de Node e Express"
        },
        title: "Programação Web com Node e Express",
        description: "Construa aplicações web dinâmicas com o express...",
        link: "#Express"
    },
    {
        imagem: {
            src: "imagens/capas/node_express.jpg",
            alt: "Capa do livro de Node e Express"
        },
        title: "Programação Web com Node e Express",
        description: "Construa aplicações web dinâmicas com o express...",
        link: "#Express"
    },{
        imagem: {
            src: "imagens/capas/react.jpg",
            alt: "Capa do livro React"
        },
        title: "React para iniciantes",
        description: "Iniciando no react você vai aprender...",
        link: "#React"
    },
];
function Home() {
    return (
        <Fragment>
            <header className={styles.home__header}>
                    <h2>Últimos Lançamentos</h2>
                </header>
            <div className={styles.main}>
                
                <Card dados={dados}/>    
            </div>
        </Fragment>
     );
}

export default Home;