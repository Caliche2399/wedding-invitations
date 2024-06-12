import {ChangeEvent, useState} from "react";
import "../../Styles/form-component.css"

export const FormComponent = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div id="confirm" className="text-center py-5">
            <h2 className="py-5">Confirma Tu Asistencia</h2>
            <form method="POST" className="forms-container" name="confirmForm" data-netlify="true">
                <input type="hidden" name="form-name" value="confirmForm"/>
                <div className="form-group">
                    <input
                        type="text"
                        name="nombre"
                        className=" rounded rounded-4 custom-input"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="apellido"
                        className=" rounded rounded-4 custom-input"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="telefono"
                        className=" rounded rounded-4 custom-input"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="rounded rounded-5 custom-button" type="submit">Confirmar</button>
            </form>
        </div>
    );
}