import { useState } from "react";
import { Button } from "../Button";
import { InputSelect } from "../InputSelect";
import { InputText } from "../InputText";
import "./Form.css";

export const Form = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const handleChangeName = (event) => {
        setNome(event.target.value);
    }
    const handleChangeCargo = (event) => {
        setCargo(event.target.value);
    }
    const handleChangeImagem = (event) => {
        setImagem(event.target.value);
    }
    const handleChangeTime = (event) => {
        event.preventDefault();
        setTime(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({ nome, cargo, imagem, time });
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite seu nome" required={true} onChange={handleChangeName} value={nome} />
                <InputText label="Cargo" placeholder="Digite seu cargo" required={true} onChange={handleChangeCargo} value={cargo} />
                <InputText label="Imagem" placeholder="http..." onChange={handleChangeImagem} value={imagem} />
                <InputSelect label="Time" list={props.times} required={true} onChange={handleChangeTime} value={time} />
                <Button type="submit">Criar Card</Button>
            </form>
        </section>
    );
}
