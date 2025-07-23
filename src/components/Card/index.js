import "./Card.css";

export const Card = ({ nome, cargo, imagem, corPrimaria }) => {
    console.log("Rendering Card for:", nome);
    const img = `https://github.com/${imagem}.png`;
    return (
        <div className="member-card">
            <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
                <img src={img} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}