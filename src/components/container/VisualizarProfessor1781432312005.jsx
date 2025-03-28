const VisualizarProfessor1781432312005 = ({ professores }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Professores Cadastrados</h2>
            {professores.length === 0 ? (
                <p className="text-center text-gray-500">Nenhum professor cadastrado ainda.</p>
            ) : (
                <div className="flex justify-center">
                    <div className="overflow-x-auto w-full max-w-3xl">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-2 px-4 border-b">ID Funcional</th>
                                    <th className="py-2 px-4 border-b">Nome</th>
                                    <th className="py-2 px-4 border-b">E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {professores.map((professor, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b text-center">{professor.idFuncional}</td>
                                        <td className="py-2 px-4 border-b text-center">{professor.nome}</td>
                                        <td className="py-2 px-4 border-b text-center">{professor.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisualizarProfessor1781432312005;