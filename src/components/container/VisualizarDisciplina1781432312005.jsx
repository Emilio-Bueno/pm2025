const VisualizarDisciplina1781432312005 = ({ disciplinas }) => {
    return (
        <div>
            <h2>Disciplinas Cadastradas</h2>
            
            {disciplinas.length === 0 ? (
                <p>Nenhuma disciplina cadastrada ainda.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Sigla</th>
                            <th>Nome</th>
                            <th>Semestre</th>
                            <th>Curso</th>
                            <th>Professor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((disciplina, index) => (
                            <tr key={index}>
                                <td>{disciplina.sigla}</td>
                                <td>{disciplina.nome}</td>
                                <td>{disciplina.semestre}</td>
                                <td>{disciplina.curso}</td>
                                <td>{disciplina.professor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default VisualizarDisciplina1781432312005;