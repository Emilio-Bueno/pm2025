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

    const adicionarCurso = (curso) => setCursos([...cursos, curso]);
    const adicionarDisciplina = (disciplina) => setDisciplinas([...disciplinas, disciplina]);
    const adicionarProfessor = (professor) => setProfessores([...professores, professor]);

    return (
        <div>
            <Menu1781432312005 setView={setView} />
            {view === "cadastroCurso" && <CadastroCurso1781432312005 adicionarCurso={adicionarCurso} />}
            {view === "cadastroDisciplina" && <CadastroDisciplina1781432312005 adicionarDisciplina={adicionarDisciplina} />}
            {view === "cadastroProfessor" && <CadastroProfessor1781432312005 adicionarProfessor={adicionarProfessor} />}
            {view === "visualizarCurso" && <VisualizarCurso1781432312005 cursos={cursos} />}
            {view === "visualizarDisciplina" && <VisualizarDisciplina1781432312005 disciplinas={disciplinas} />}
            {view === "visualizarProfessor" && <VisualizarProfessor1781432312005 professores={professores} />}
        </div>
    );
};

export default Container1781432312005;
