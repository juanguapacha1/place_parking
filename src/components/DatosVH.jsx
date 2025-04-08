import React from "react"

function DatosVH({datosVehiculo}) {
    return (
        <div>
            <h1>Datos del vehículo</h1>
            <table>
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Tipo de Vehículo</th>
                        <th>Hora de Entrada</th>
                    </tr>
                </thead>
                <tbody>
                    {datosVehiculo.map((vehiculo, index) => (
                        <tr key={index}>
                            <td>{vehiculo.placa}</td>
                            <td>{vehiculo.tipo}</td>
                            <td>{new Date(vehiculo.horaEntrada).toLocaleTimeString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DatosVH;