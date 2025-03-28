const VisualizarCurso1781432312005 = ({ cursos }) => {
    return (
        <div>
            <h2>Cursos Cadastrados</h2>
            
            {cursos.length === 0 ? (
                <p>Nenhum curso cadastrado ainda.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Sigla</th>
                            <th>Nome Completo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map((curso, index) => (
                            <tr key={index}>
                                <td>{curso.sigla}</td>
                                <td>{curso.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default VisualizarCurso1781432312005;