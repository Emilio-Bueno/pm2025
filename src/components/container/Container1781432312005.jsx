import { useState } from "react";
import Menu1781432312005 from "./Menu1781432312005";
import CadastroCurso1781432312005 from "./CadastroCurso1781432312005";
import CadastroDisciplina1781432312005 from "./CadastroDisciplina1781432312005";
import CadastroProfessor1781432312005 from "./CadastroProfessor1781432312005";
import VisualizarCurso1781432312005 from "./VisualizarCurso1781432312005";
import VisualizarDisciplina1781432312005 from "./VisualizarDisciplina1781432312005";
import VisualizarProfessor1781432312005 from "./VisualizarProfessor1781432312005";

const Container1781432312005 = () => {
    const [view, setView] = useState(null);
    const [cursos, setCursos] = useState([]);
    const [disciplinas, setDisciplinas] = useState([]);
    const [professores, setProfessores] = useState([]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <Menu1781432312005 setView={setView} currentView={view} />
                <div className="p-6">
                    {!view && (
                        <div className="text-center py-10">
                            <p className="text-gray-500 text-lg">Selecione uma opção no menu</p>
                        </div>
                    )}
                    {view === "cadastroCurso" && <CadastroCurso1781432312005 adicionarCurso={(curso) => setCursos([...cursos, curso])} />}
                    {view === "cadastroDisciplina" && <CadastroDisciplina1781432312005 adicionarDisciplina={(disciplina) => setDisciplinas([...disciplinas, disciplina])} />}
                    {view === "cadastroProfessor" && <CadastroProfessor1781432312005 adicionarProfessor={(professor) => setProfessores([...professores, professor])} />}
                    {view === "visualizarCurso" && <VisualizarCurso1781432312005 cursos={cursos} />}
                    {view === "visualizarDisciplina" && <VisualizarDisciplina1781432312005 disciplinas={disciplinas} />}
                    {view === "visualizarProfessor" && <VisualizarProfessor1781432312005 professores={professores} />}
                </div>
            </div>
        </div>
    );
};

export default Container1781432312005;