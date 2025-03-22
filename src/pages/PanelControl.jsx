import React from 'react'
import Nav from '../components/Nav.jsx'
import EntradaVH from '../components/EntradaVH.jsx'
import DatosVH from '../components/DatosVH.jsx'
import SalidaVH from '../components/SalidaVH.jsx'
import Pagos from '../components/Pagos.jsx'
function PanelControl() {
    return (
        <>
        <nav>
            <Nav />
        </nav>
        <main className="panel-control">
            <div className="panel-entrada">
                <EntradaVH />

            </div>
            <div className="panel-datos">
                <DatosVH />
            </div>
            <div className="panel">
                <div className="panel-salida">
                    <SalidaVH />
                </div>
                <div className="panel-pago">
                    <Pagos />
                </div>  
            </div>
        </main>
    </>
    )

}

export default PanelControl