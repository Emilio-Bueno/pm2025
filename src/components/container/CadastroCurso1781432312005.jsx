import { useState } from "react";

const CadastroCurso1781432312005 = ({ adicionarCurso }) => {
    const [sigla, setSigla] = useState("");
    const [nome, setNome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarCurso({ sigla, nome });
        setSigla("");
        setNome("");
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cadastro de Curso</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-1">Sigla</label>
                    <input
                        type="text"
                        value={sigla}
                        onChange={(e) => setSigla(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Nome Completo</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default CadastroCurso1781432312005