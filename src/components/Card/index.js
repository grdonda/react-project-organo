import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Card.css";

export const Card = ({ member, backgroundColor, onDelete, onFavorite }) => {

    const img = `https://github.com/${member.imagem}.png`;
    return (
        <div className="member-card">
            <AiFillCloseCircle
                size={35}
                className="deletar"
                onClick={(e) => onDelete(member.id)}
            />
            <div className="cabecalho" style={{ backgroundColor: backgroundColor }}>
                <img src={img} alt={member.nome} />
            </div>
            <div className="rodape">
                <h4>{member.nome}</h4>
                <h5>{member.cargo}</h5>

                <div className="favoritar" onClick={(e) => onFavorite(member.id)}>
                    {!member.favorite || member.favorite == false ? <AiOutlineHeart size={25} /> : <AiFillHeart size={25} />}
                </div>

            </div>
        </div>
    )
}