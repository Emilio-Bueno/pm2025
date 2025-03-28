const VisualizarDisciplina1781432312005 = ({ disciplinas }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Disciplinas Cadastradas</h2>
            {disciplinas.length === 0 ? (
                <p className="text-gray-500">Nenhuma disciplina cadastrada ainda.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Sigla</th>
                                <th className="py-2 px-4 border-b">Nome</th>
                                <th className="py-2 px-4 border-b">Semestre</th>
                                <th className="py-2 px-4 border-b">Curso</th>
                                <th className="py-2 px-4 border-b">Professor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {disciplinas.map((disciplina, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{disciplina.sigla}</td>
                                    <td className="py-2 px-4 border-b">{disciplina.nome}</td>
                                    <td className="py-2 px-4 border-b">{disciplina.semestre}</td>
                                    <td className="py-2 px-4 border-b">{disciplina.curso}</td>
                                    <td className="py-2 px-4 border-b">{disciplina.professor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default VisualizarDisciplina1781432312005;