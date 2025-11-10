import { useEffect, useState } from "react";
import { todosProductos } from "../api/api";
import { TarjetaProd } from "./TarjetaProd";
import { Barrabusqueda } from "./BarraBusqueda";
export function ContenedorTarj() {
    const[productos, setProductos]=useState([]);
    /*useEffect(()=>{
        async function cargarProductos() {
            const resProductos = await todosProductos();
            setProductos(resProductos.data)
        }
        cargarProductos();
    },[])*/
    
    function buscarProducto(producto) {
        setProductos(producto)
    }
    return(
        <div>
            <div className="content-barra-contenedorTarj">
                <Barrabusqueda onProducto={buscarProducto}/>
            </div>
            <div className="contentTarjetas">
                {productos.map(producto=>(
                    <TarjetaProd key={producto.id_prod} producto={producto}/>
                ))}
            </div>
        </div>
    )
}