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
        <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro de Disciplina</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5"> {/* Aumentei o espaço vertical aqui */}
                <div>
                    <label className="block text-gray-700 mb-2">Sigla</label> {/* Aumentei o espaço abaixo do label */}
                    <input
                        type="text"
                        value={sigla}
                        onChange={(e) => setSigla(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">Semestre</label>
                    <input
                        type="text"
                        value={semestre}
                        onChange={(e) => setSemestre(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">Curso</label>
                    <input
                        type="text"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-gray-700 mb-2">Professor</label>
                    <input
                        type="text"
                        value={professor}
                        onChange={(e) => setProfessor(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                
                <div className="pt-4"> {/* Aumentei o espaço acima do botão */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastroDisciplina1781432312005;