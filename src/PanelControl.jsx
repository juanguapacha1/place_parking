import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import EntradaVH from "./components/EntradaVH.jsx";
import DatosVH from "./components/DatosVH.jsx";
import SalidaVH from "./components/SalidaVH.jsx";
import Pagos from "./components/Pagos.jsx";

function PanelControl() {
    const [ingresos, setIngresos] = useState([]); // Estado compartido para los datos
    const [total, setTotal] = useState(0); // Estado para el total a pagar
    const [datosImpresion, setDatosImpresion] = useState({}); // Estado para los datos de impresión

    const agregarIngreso = (nuevoIngreso) => {
        setIngresos([...ingresos, nuevoIngreso]); // Agrega un nuevo ingreso al estado
    };

    return (
        <>
            <nav>
                <Nav />
            </nav>
            <main className="panel-control">
                <div className="panel-entrada">
                    <EntradaVH agregarIngreso={agregarIngreso} />
                </div>
                <div className="panel-datos">
                    <DatosVH datosVehiculo={ingresos} />
                </div>
                <div className="panel">
                    <div className="panel-salida">
                        <SalidaVH
                            ingresos={ingresos}
                            setIngresos={setIngresos}
                            setTotal={setTotal}
                            setDatosImpresion={setDatosImpresion} // Pasar setDatosImpresion
                        />
                    </div>
                    <div className="panel-pago">
                        <Pagos
                            total={total}
                            datosImpresion={datosImpresion} // Pasar datosImpresion
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default PanelControl;