import Boton from "./Boton"
function SalidaVH() {
    return (
        <div>
            <h1 className="titulo">Placla Vehiculo</h1>
            <input type="text" placeholder="Placa" />
            <Boton text="Buscar" />
        </div>
    );
}

export default SalidaVH;