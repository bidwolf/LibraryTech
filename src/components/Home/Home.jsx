import { React } from "react";
import Card from "../Card/Card";
const dados = [
    { imagem:{
        src: "imagens/capas/react.jpg",
        alt: "Capa do livro React"
    },
    title: "React para iniciantes",
    description: "Iniciando no react você vai aprender...",
        link: "#React"
    },
    { imagem:{
        src: "imagens/capas/node_express.jpg",
        alt: "Capa do livro de Node e Express"
    },
    title: "Programação Web com Node e Express",
    description: "Construa aplicações web dinâmicas com o express...",
        link: "#Express"
    },
    { imagem:{
        src: "imagens/capas/node_express.jpg",
        alt: "Capa do livro de Node e Express"
    },
    title: "Programação Web com Node e Express",
    description: "Construa aplicações web dinâmicas com o express...",
        link: "#Express"
    },
    { imagem:{
        src: "imagens/capas/node_express.jpg",
        alt: "Capa do livro de Node e Express"
    },
    title: "Programação Web com Node e Express",
    description: "Construa aplicações web dinâmicas com o express...",
        link: "#Express"
    },
];
function Home() {
    return ( 
        <>
            <h2>Últimos Lançamentos</h2>
            <Card dados={dados}/>
        </>
     );
}

export default Home;