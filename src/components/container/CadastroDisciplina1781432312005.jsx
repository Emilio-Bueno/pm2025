import { useState } from "react";

const CadastroDisciplina1781432312005 = ({ adicionarDisciplina }) => {
    const [sigla, setSigla] = useState("");
    const [nome, setNome] = useState("");
    const [semestre, setSemestre] = useState("");
    const [curso, setCurso] = useState("");
    const [professor, setProfessor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sigla.trim() && nome.trim() && semestre.trim() && curso.trim() && professor.trim()) {
            adicionarDisciplina({
                sigla,
                nome,
                semestre,
                curso,
                professor
            });
        }
    };

    return (
        <div>
            <h2>Cadastro de Disciplina</h2>
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
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Semestre:</label>
                    <input
                        type="text"
                        value={semestre}
                        onChange={(e) => setSemestre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Curso:</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Professor:</label>
                    <input
                        type="text"
                        value={professor}
                        onChange={(e) => setProfessor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroDisciplina1781432312005;