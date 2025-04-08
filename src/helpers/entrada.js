
function imprimirSalida() {
    let placa = document.getElementById("placasalida").value.toUpperCase();
    let valor = document.getElementById("total").innerText;
    let tipo = document.getElementById("tipo").value.toUpperCase();
    let hora = new Date();
  
    if (!placa || !valor) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor complete los datos de la salida antes de imprimir."
        });
        return;
    }
  
    let ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.open();
    ventanaImpresion.document.write(`
        <html>
        <head>
            <title>Información de Salida</title>
            <style>
                body {
                    font-family: 'Montserrat', sans-serif;
                    text-align: center;
                    margin: 20px;
                }
                h1 {
                    color: #AF6543;
                }
                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
         
            <h1>Información de Salida</h1>
            <p><strong>Placa del Vehículo:</strong> ${placa}</p>
            <p><strong>Valor a Pagar:</strong> ${valor}</p>
            <p><strong>Tipo de Vehículo:</strong> ${tipo}</p>
           <p><strong>Hora impresión:</strong> ${hora}</p>
           
            <p>¡Gracias por utilizar nuestro servicio!</p>
           
  
        </body>
        </html>
    `);
    ventanaImpresion.document.close();
    ventanaImpresion.print();
  }