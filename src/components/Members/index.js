import { Card } from "../Card"
import "./Members.css"

export const Members = (props) => {
    return (
        props.list.length > 0 &&
        <section className="members" style={{ backgroundColor: props.corSecundaria }}>
            <h3>{props.name}</h3>
            <div className='colaboradores'>
                {
                    (!props.list || props.list.length === 0)
                        ? <p>Nenhum colaborador cadastrado.</p>
                        : props.list.map((member, index) => (
                            <Card key={index} {...member} corPrimaria={props.corPrimaria} />
                        ))
                }
            </div>
        </section>
    )
}