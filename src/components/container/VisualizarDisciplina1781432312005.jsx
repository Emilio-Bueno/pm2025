const VisualizarDisciplina1781432312005 = ({ disciplinas }) => {
    return (
        <div>
            <h2>Disciplinas Cadastradas</h2>
            <ul>
                {disciplinas.map((disciplina, index) => (
                    <li key={index}>{disciplina}</li>
                ))}
            </ul>
        </div>
    );
};

export default VisualizarDisciplina1781432312005;
