import { useState } from "react";
import CadastroCurso1781432312005 from "./CadastroCurso1781432312005";
import CadastroDisciplina1781432312005 from "./CadastroDisciplina1781432312005";
import CadastroProfessor1781432312005 from "./CadastroProfessor1781432312005";
import VisualizarCurso1781432312005 from "./VisualizarCurso1781432312005";
import VisualizarDisciplina1781432312005 from "./VisualizarDisciplina1781432312005";
import VisualizarProfessor1781432312005 from "./VisualizarProfessor1781432312005";

const Container1781432312005 = () => {
    const [view, setView] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cursos, setCursos] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [professores, setProfessores] = useState([]);

    const menuItems = [
        { id: "cadastroCurso", label: "Cadastrar Curso" },
        { id: "cadastroDisciplina", label: "Cadastrar Disciplina" },
        { id: "cadastroProfessor", label: "Cadastrar Professor" },
        { id: "visualizarCurso", label: "Visualizar Cursos" },
        { id: "visualizarDisciplina", label: "Visualizar Disciplinas" },
        { id: "visualizarProfessor", label: "Visualizar Professores" }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar Integrada */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo/Título */}
                        <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-800">
                                Sistema Acadêmico
                            </span>
                        </div>
                        
                        {/* Menu Dropdown */}
                        <div className="relative ml-4 flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Menu
                                <svg 
                                    className={`ml-2 -mr-1 h-5 w-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {isMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-1">
                                        {menuItems.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => {
                                                    setView(item.id);
                                                    setIsMenuOpen(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Área de Conteúdo */}
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            {view === "cadastroCurso" && (
                                <CadastroCurso1781432312005 adicionarCurso={(curso) => setCursos([...cursos, curso])} />
                            )}
                            {view === "cadastroDisciplina" && (
                                <CadastroDisciplina1781432312005 adicionarDisciplina={(disciplina) => setDisciplinas([...disciplinas, disciplina])} />
                            )}
                            {view === "cadastroProfessor" && (
                                <CadastroProfessor1781432312005 adicionarProfessor={(professor) => setProfessores([...professores, professor])} />
                            )}
                            {view === "visualizarCurso" && (
                                <VisualizarCurso1781432312005 cursos={cursos} />
                            )}
                            {view === "visualizarDisciplina" && (
                                <VisualizarDisciplina1781432312005 disciplinas={disciplinas} />
                            )}
                            {view === "visualizarProfessor" && (
                                <VisualizarProfessor1781432312005 professores={professores} />
                            )}
                            {!view && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">
                                        Selecione uma opção no menu para começar
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Container1781432312005;