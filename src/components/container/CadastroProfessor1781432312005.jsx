import { useState } from "react";

const CadastroProfessor1781432312005 = ({ adicionarProfessor }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idFuncional, setIdFuncional] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome.trim() && email.trim() && idFuncional.trim()) {
            adicionarProfessor({
                idFuncional,
                nome,
                email
            });
        }
    };

    return (
        <div>
            <h2>Cadastro de Professor</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID Funcional:</label>
                    <input
                        type="text"
                        value={idFuncional}
                        onChange={(e) => setIdFuncional(e.target.value)}
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
                    <label>E-mail:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroProfessor1781432312005;