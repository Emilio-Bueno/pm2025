const VisualizarProfessor1781432312005 = ({ professores }) => {
    return (
        <div>
            <h2>Professores Cadastrados</h2>
            
            {professores.length === 0 ? (
                <p>Nenhum professor cadastrado ainda.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID Funcional</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {professores.map((prof, index) => (
                            <tr key={index}>
                                <td>{prof.idFuncional}</td>
                                <td>{prof.nome}</td>
                                <td>{prof.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default VisualizarProfessor1781432312005;