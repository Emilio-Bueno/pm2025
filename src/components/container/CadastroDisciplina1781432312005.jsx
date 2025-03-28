import { useState } from "react";

const CadastroDisciplina1781432312005 = ({ adicionarDisciplina }) => {
    const [nome, setNome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome.trim() !== "") {
            adicionarDisciplina(nome);
            setNome("");
        }
    };

    return (
        <div>
            <h2>Cadastro de Disciplina</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome da Disciplina"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroDisciplina1781432312005;
