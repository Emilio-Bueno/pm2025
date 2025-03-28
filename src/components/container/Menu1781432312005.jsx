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
        <nav className="bg-blue-600 text-white">
            <ul className="flex flex-col items-center md:flex-row md:justify-center flex-wrap">
                {menuItems.map(item => (
                    <li
                        key={item.id}
                        className={`px-4 py-3 cursor-pointer hover:bg-blue-700 transition text-center w-full md:w-auto ${currentView === item.id ? 'bg-blue-800 font-bold' : ''}`}
                        onClick={() => setView(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu1781432312005;