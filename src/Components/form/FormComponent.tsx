import { useState } from "react";
import "../../Styles/form-component.css"

export const FormComponent = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://script.google.com/macros/s/AKfycbx6VwEm2o5PMweSmM0T2zDC8fO6r-6abwOHvGxNlKFUR-WGGnWA8zlZAJ1K5axLFeLnXA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert('Datos enviados exitosamente');
            setFormData({
                nombre: '',
                apellido: '',
                telefono: ''
            });
        } else {
            alert('Error al enviar los datos');
        }
    };

    return (
        <div id="confirm" className="text-center py-5">
            <h2 className="py-5">Confirma Tu Asistencia</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="nombre"
                        className="rounded rounded-4 custom-input"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="apellido"
                        className="rounded rounded-4 custom-input"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="telefono"
                        className="rounded rounded-4 custom-input"
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