import React from "react";
import Boton from "./Boton";

function Pagos({ total, datosImpresion }) {
    const imprimirSalida = () => {
        const ventanaImpresion = window.open("", "_blank");
        ventanaImpresion.document.open();
        ventanaImpresion.document.write(`
            <html>
            <head>
                <title>Ticket de Pago</title>
                <style>
                    body {
                        font-family: 'Courier New', Courier, monospace;
                        text-align: center;
                        margin: 0;
                        padding: 20px;
                        width: 300px;
                    }
                    h1 {
                        font-size: 18px;
                        margin-bottom: 10px;
                    }
                    p {
                        margin: 5px 0;
                        font-size: 14px;
                    }
                    .ticket {
                        border: 1px dashed #000;
                        padding: 10px;
                        margin-top: 10px;
                    }
                    .total {
                        font-size: 16px;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>Ticket de Pago</h1>
                <div class="ticket">
                    <p><strong>Placa:</strong> ${datosImpresion.placa}</p>
                    <p><strong>Tipo de Vehículo:</strong> ${datosImpresion.tipo}</p>
                    <p><strong>Hora de Entrada:</strong> ${new Date(datosImpresion.horaEntrada).toLocaleTimeString()}</p>
                    <p><strong>Hora de Salida:</strong> ${new Date(datosImpresion.horaSalida).toLocaleTimeString()}</p>
                    <p class="total"><strong>Total a Pagar:</strong> $${total}</p>
                </div>
                <p>¡Gracias por su visita!</p>
            </body>
            </html>
        `);
        ventanaImpresion.document.close();
    };

    return (
        <div className="panel-pago">
            <h1 className="titulo">Total a Pagar</h1>
            <input type="text" value={`$${total}`} readOnly />
            <Boton text="Pagar" onClick={imprimirSalida} />
        </div>
    );
}

export default Pagos;