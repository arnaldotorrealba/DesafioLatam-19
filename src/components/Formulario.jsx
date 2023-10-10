import { validateInputs } from "../helpers/formValidations";
import { useForm } from "../hooks/useForm";

const initialForm = {
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
}

export const Formulario = ({ handleNewColaborador, handleValidationsErrors }) => {

    const { handleInputChange, cleanValue, resetForm, formState } = useForm(initialForm)

    const { nombre, correo, edad, cargo, telefono } = formState;

    const handleOnSubmitForm = (event) => {
        event.preventDefault();
        handleValidationsErrors(validateInputs(formState));
        if (validateInputs(formState).length === 0) {
            const newColaborator = {
                ...formState,
                id: self.crypto.randomUUID()
            }
            handleNewColaborador(newColaborator);
            resetForm();
        }
    }

    return (
        <form className="mx-2" onSubmit={handleOnSubmitForm}>
            <h3>Agregar Colaborador</h3>
            <hr />
            <div className="my-2">
                <label htmlFor="nombre" className="form-label">
                    Nombre:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre del colaborador"
                    value={nombre}
                    onChange={handleInputChange}
                    onBlur={cleanValue}
                />
            </div>
            <div className="my-2">
                <label htmlFor="correo" className="form-label">
                    Email:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="correo"
                    name="correo"
                    placeholder="Email del colaborador"
                    value={correo}
                    onChange={handleInputChange}
                    onBlur={cleanValue}
                />
            </div>
            <div className="my-2">
                <label htmlFor="edad" className="form-label">
                    Edad:
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="edad"
                    name="edad"
                    placeholder="Edad del colaborador"
                    value={edad}
                    onChange={handleInputChange}
                    onBlur={cleanValue}
                />
            </div>
            <div className="my-2">
                <label htmlFor="cargo" className="form-label">
                    Cargo:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="cargo"
                    name="cargo"
                    placeholder="Cargo del colaborador"
                    value={cargo}
                    onChange={handleInputChange}
                    onBlur={cleanValue}
                />
            </div>
            <div className="my-2">
                <label htmlFor="telefono" className="form-label">
                    Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono del colaborador"
                    value={telefono}
                    onChange={handleInputChange}
                    onBlur={cleanValue}
                />
            </div>
            <button className="btn btn-primary my-2 w-100">
                <i className="bi bi-person-plus-fill"></i> Agregar Colaborador
            </button>
        </form>
    );
};
