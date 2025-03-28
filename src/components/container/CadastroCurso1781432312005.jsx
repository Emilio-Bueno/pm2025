import { useState } from "react";

const CadastroCurso1781432312005 = ({ adicionarCurso }) => {
    const [nome, setNome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome.trim() !== "") {
            adicionarCurso(nome);
            setNome("");
        }
    };

    return (
        <div>
            <h2>Cadastro de Curso</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome do Curso"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroCurso1781432312005;
