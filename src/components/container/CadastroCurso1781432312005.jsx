import { useState } from "react";

const CadastroCurso1781432312005 = ({ adicionarCurso }) => {
    const [sigla, setSigla] = useState("");
    const [nome, setNome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sigla.trim() && nome.trim()) {
            adicionarCurso({ sigla, nome });
        }
    };

    return (
        <div>
            <h2>Cadastro de Curso</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sigla:</label>
                    <input
                        type="text"
                        value={sigla}
                        onChange={(e) => setSigla(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nome Completo:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroCurso1781432312005;