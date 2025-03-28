const Menu1781432312005 = ({ setView, currentView }) => {
    const menuItems = [
        { id: "cadastroCurso", label: "Cadastrar Curso" },
        { id: "cadastroDisciplina", label: "Cadastrar Disciplina" },
        { id: "cadastroProfessor", label: "Cadastrar Professor" },
        { id: "visualizarCurso", label: "Visualizar Cursos" },
        { id: "visualizarDisciplina", label: "Visualizar Disciplinas" },
        { id: "visualizarProfessor", label: "Visualizar Professores" }
    ];

    return (
        <nav>
            <h2>Menu</h2>
            <ul>
                {menuItems.map(item => (
                    <li 
                        key={item.id}
                        onClick={() => setView(item.id)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu1781432312005;