import { useState } from "react";

const Menu1781432312005 = ({ setView }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const menuItems = [
        { id: "cadastroCurso", label: "Cadastrar Curso" },
        { id: "cadastroDisciplina", label: "Cadastrar Disciplina" },
        { id: "cadastroProfessor", label: "Cadastrar Professor" },
        { id: "visualizarCurso", label: "Visualizar Cursos" },
        { id: "visualizarDisciplina", label: "Visualizar Disciplinas" },
        { id: "visualizarProfessor", label: "Visualizar Professores" }
    ];

    const handleMenuItemClick = (viewId) => {
        setView(viewId);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between items-center w-32 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded="true"
                aria-haspopup="true"
            >
                Menu

                <svg 
                    className={`-mr-1 ml-2 h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div 
                    className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleMenuItemClick(item.id)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu1781432312005;