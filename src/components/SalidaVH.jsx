import React, { useState } from "react";
import Boton from "./Boton";

function SalidaVH({ ingresos, setIngresos, setTotal, setDatosImpresion }) {
    const [placa, setPlaca] = useState("");

    const handleSalida = () => {
        const placaUpper = placa.toUpperCase();
        const horaSalida = new Date();

        const index = ingresos.findIndex((ingreso) => ingreso.placa === placaUpper);
        if (index !== -1) {
            ingresos[index].horaSalida = horaSalida;

            const horaEntrada = new Date(ingresos[index].horaEntrada);
            const tiempoTotalHoras = (horaSalida - horaEntrada) / (1000 * 60 * 60);

            const precioPorHora = 5000;
            let precioTotal;

            if (tiempoTotalHoras <= 0) {
                precioTotal = 10000;
                alert(`La hora de salida debe ser posterior a la de entrada. Se aplicará una tarifa fija de penalización.`);
            } else {
                precioTotal = Math.ceil(tiempoTotalHoras) * precioPorHora;

                if (ingresos[index].tipo === "HIBRIDO") {
                    precioTotal *= 0.9;
                    alert(`Vehículo Híbrido: Gracias por contribuir con el medio ambiente. Se aplicó un descuento del 10%.`);
                }
            }

            setTotal(precioTotal);

            // Guardar los datos para la impresión
            setDatosImpresion({
                placa: ingresos[index].placa,
                tipo: ingresos[index].tipo,
                horaEntrada: ingresos[index].horaEntrada,
                horaSalida: horaSalida.toISOString(),
            });

            alert(`Placa: ${placaUpper}\nTotal a pagar: $${precioTotal}`);
            setIngresos(ingresos.filter((_, i) => i !== index));
        } else {
            alert("No se encontró un vehículo con esa placa.");
        }

        setPlaca("");
    };

    const handlePlacaChange = (e) => {
        const value = e.target.value.toUpperCase();
        if (/^[A-Z0-9]*$/.test(value) && value.length <= 6) {
            setPlaca(value); // Solo actualiza el estado si cumple con el patrón
        }
    };

    return (
        <div className="salida">
            <h1 className="titulo">Placa Vehículo</h1>
            <input
                type="text"
                placeholder="Placa"
                value={placa}
                onChange={handlePlacaChange}
                maxLength={6} // Limita a 6 caracteres
            />
            <Boton text="Buscar" onClick={handleSalida} />
        </div>
    );
}

export default SalidaVH;

