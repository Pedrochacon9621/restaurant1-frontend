import { useEffect, useState } from "react";
import { todosProductos } from "../api/api";
import { TarjetaProd } from "./TarjetaProd";
export function ContenedorTarj() {
    const[productos, setProductos]=useState([]);
    useEffect(()=>{
        async function cargarProductos() {
            const resProductos = await todosProductos();
            setProductos(resProductos.data)
        }
        cargarProductos();
    },[])
    return(
        <div>
            <div className="contentTarjetas">
                {productos.map(producto=>(
                    <TarjetaProd key={producto.id_prod} producto={producto}/>
                ))}
                
            </div>
        </div>
    )
}