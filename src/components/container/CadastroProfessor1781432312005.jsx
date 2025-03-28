import { useState } from "react";

const CadastroProfessor1781432312005 = ({ adicionarProfessor }) => {
    const [idFuncional, setIdFuncional] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarProfessor({ idFuncional, nome, email });
        setIdFuncional("");
        setNome("");
        setEmail("");
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cadastro de Professor</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-1">ID Funcional</label>
                    <input
                        type="text"
                        value={idFuncional}
                        onChange={(e) => setIdFuncional(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">E-mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

export default CadastroProfessor1781432312005;