import hexToRgba from "hex-to-rgba";
import { Card } from "../Card";
import "./Members.css";

export const Members = ({ squad, listMembers, onChangeColor, onDelete , onFavorite}) => {

    const cor = hexToRgba(squad.cor, '0.6');

    return (
        listMembers.length > 0 &&
        <section className="members" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: cor }}>

            <h3 style={{ borderColor: squad.cor }}>{squad.nome}</h3>
            <input className="cor" type="color" onChange={(e) => onChangeColor(squad.nome, e.target.value)} value={squad.cor} />

            <div className='colaboradores'>
                {
                    (!listMembers || listMembers.length === 0)
                        ? <p>Nenhum colaborador cadastrado.</p>
                        : listMembers.map((member, index) => {

                            return <Card
                                key={index}
                                member={member}
                                backgroundColor={squad.cor}
                                onDelete={onDelete}
                                onFavorite={onFavorite} />
                        })
                }
            </div>
        </section>
    )
}