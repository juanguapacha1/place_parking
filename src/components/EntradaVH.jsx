import React, { useState } from "react";
import Boton from "./Boton";

function EntradaVH({ agregarIngreso }) {
    const [placa, setPlaca] = useState("");
    const [tipo, setTipo] = useState("");

    const handleEntrada = () => {
        if (!placa || !tipo) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const hora = new Date();
        const datos = {
            placa: placa.toUpperCase(),
            tipo: tipo.toUpperCase(),
            horaEntrada: hora.toISOString(), // Almacenar como cadena ISO
        };

        agregarIngreso(datos); // Llama a la función para agregar el ingreso
        alert(`Vehículo ingresado:\nPlaca: ${datos.placa}\nTipo: ${datos.tipo}\nHora: ${hora.toLocaleTimeString()}`);

        // Limpiar los campos
        setPlaca("");
        setTipo("");
    };

    const handlePlacaChange = (e) => {
        const value = e.target.value.toUpperCase();
        if (/^[A-Z0-9]*$/.test(value) && value.length <= 6) {
            setPlaca(value);
        }
    };

    return (
        <div className="panel-entrada">
            <h1 className="titulo">Placa Vehículo</h1>
            <input
                type="text"
                placeholder="Placa"
                value={placa}
                onChange={handlePlacaChange}
                maxLength={6} // Limita a 6 caracteres
            />
            <h1 className="titulo">Tipo de Vehículo</h1>
            <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
            >
                <option value="" disabled>
                    Tipo de Vehículo
                </option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="hibrido">Híbrido</option>
            </select>
            <Boton text="Ingresar" onClick={handleEntrada} />
        </div>
    );
}

export default EntradaVH;