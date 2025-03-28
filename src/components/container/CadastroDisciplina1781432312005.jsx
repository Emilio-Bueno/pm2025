import { useState } from "react";

const CadastroDisciplina1781432312005 = ({ adicionarDisciplina }) => {
    const [sigla, setSigla] = useState("");
    const [nome, setNome] = useState("");
    const [semestre, setSemestre] = useState("");
    const [curso, setCurso] = useState("");
    const [professor, setProfessor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarDisciplina({ sigla, nome, semestre, curso, professor });
        setSigla("");
        setNome("");
        setSemestre("");
        setCurso("");
        setProfessor("");
    };

    return (
        <div>
            <h2>Cadastro de Disciplina</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Sigla"
                    value={sigla}
                    onChange={(e) => setSigla(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Semestre"
                    value={semestre}
                    onChange={(e) => setSemestre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Curso"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Professor"
                    value={professor}
                    onChange={(e) => setProfessor(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroDisciplina1781432312005;