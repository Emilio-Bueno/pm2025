const VisualizarCurso1781432312005 = ({ cursos }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Cursos Cadastrados</h2>
            {cursos.length === 0 ? (
                <p className="text-gray-500">Nenhum curso cadastrado ainda.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b">Sigla</th>
                                <th className="py-2 px-4 border-b">Nome Completo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos.map((curso, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{curso.sigla}</td>
                                    <td className="py-2 px-4 border-b">{curso.nome}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default VisualizarCurso1781432312005;