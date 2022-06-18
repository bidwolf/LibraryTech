import React from "react";
function Card({dados}) {
    
    return (
        <>
            
        {
            
            dados.map((books) => (
                
        <div className="card">
        <div className="thumb"><img src={ books.imagem.src} alt={books.imagem.alt}/></div>
            <div className="detalhes">
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