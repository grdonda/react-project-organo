import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { Button } from "../Button";
import { InputSelect } from "../InputSelect";
import { InputText } from "../InputText";
import "./Form.css";

export const Form = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("#000000");


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

    const handleChangeNomeTime = (event) => {
        setNomeTime(event.target.value);
    }
    const handleChangeCorTime = (event) => {
        setCorTime(event.target.value);
    }
    const handleSubmitTime = (event) => {
        event.preventDefault();
        props.onSubmitTime({ id: uuid(), nome: nomeTime, cor: corTime });
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Escolha o time para inserir o colaborador</h2>
                <InputSelect label="Time" list={props.squads} required={true} onChange={handleChangeTime} value={time} />

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite seu nome" required={true} onChange={handleChangeName} value={nome} />
                <InputText label="Cargo" placeholder="Digite seu cargo" required={true} onChange={handleChangeCargo} value={cargo} />
                <InputText label="Imagem" placeholder="http..." onChange={handleChangeImagem} value={imagem} />
                <Button type="submit">Criar Card</Button>
            </form>

            <form onSubmit={handleSubmitTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <InputText label="Nome" placeholder="Digite um nome" required={true} onChange={handleChangeNomeTime} value={nomeTime} />
                <InputText type="color" label="Cor" placeholder="Cor para o time" required={true} onChange={handleChangeCorTime} value={corTime} />
                <Button type="submit">Criar time</Button>
            </form>
        </section>
    );
}
