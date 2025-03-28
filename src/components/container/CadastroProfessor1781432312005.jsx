import { useState } from "react";

const CadastroProfessor1781432312005 = ({ adicionarProfessor }) => {
    const [nome, setNome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome.trim() !== "") {
            adicionarProfessor(nome);
            setNome("");
        }
    };

    return (
        <div>
            <h2>Cadastro de Professor</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome do Professor"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroProfessor1781432312005;
