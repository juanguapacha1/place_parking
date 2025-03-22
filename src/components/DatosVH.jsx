function DatosVH() {
    const datosVehiculo = [
        {
            placa: 'ABC123',
            tipo: 'Carro',
            horaEntrada: '10:00 AM',
        }
    ];

    return (
        <>
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
                            <td>{vehiculo.horaEntrada}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default DatosVH;