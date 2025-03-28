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
        <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Cadastro de Curso</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="block text-gray-700 mb-1">Sigla</label>
                    <input
                        type="text"
                        value={sigla}
                        onChange={(e) => setSigla(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="block text-gray-700 mb-1">Nome Completo</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition font-medium"
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CadastroCurso1781432312005;