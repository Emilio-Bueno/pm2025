const VisualizarProfessor1781432312005 = ({ professores }) => {
    return (
        <div>
            <h2>Professores Cadastrados</h2>
            <ul>
                {professores.map((professor, index) => (
                    <li key={index}>{professor}</li>
                ))}
            </ul>
        </div>
    );
};

export default VisualizarProfessor1781432312005;
