export const Listado = ({ colaboradores, removeColaborador }) => {

    const handleRemoveColaborador = (id) => {
        removeColaborador(id)
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col-3">Nombre</th>
                        <th scope="col-4">Correo</th>
                        <th scope="col-1">Edad</th>
                        <th scope="col-3">Cargo</th>
                        <th scope="col-1">Teléfono</th>
                        <th scope="col-1">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map(
                        ({ id, nombre, correo, edad, cargo, telefono }) => (
                            <tr key={id}>
                                <td>{nombre}</td>
                                <td>{correo}</td>
                                <td>{edad}</td>
                                <td>{cargo}</td>
                                <td>{telefono}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleRemoveColaborador(id)}
                                    >
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};
