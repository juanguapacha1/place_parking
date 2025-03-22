import Boton from "./Boton"

function EntradaVH() {
    return(
        <>
        <h1 className="titulo">Placla Vehiculo</h1>
        <input type="text" placeholder="Placa" />
        <h1 className="titulo">Tipo de Vehiculo</h1>
        <select>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="Hibrido">Hibrido</option>
        </select>
        <Boton text="Ingresar" />
        </>
    )
}

export default EntradaVH