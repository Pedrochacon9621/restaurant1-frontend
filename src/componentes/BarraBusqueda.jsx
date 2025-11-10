import { useForm } from "react-hook-form"
import { buscarProducto } from "../api/api"
import {useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
export function Barrabusqueda({onProducto}) {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const {register, handleSubmit, setValue} = useForm()

    // Leer parámetro de búsqueda desde la URL
    const busquedaInicial = searchParams.get("busqueda");

    async function ejecutarBuscarProducto(buscar) {
        const resBusqueda = await buscarProducto(buscar)
        if (onProducto) {
            onProducto(resBusqueda);
        }

    }

    useEffect(() => {
        if (busquedaInicial) {
        setValue("busqueda", busquedaInicial); // actualiza el input
        ejecutarBuscarProducto({ busqueda: busquedaInicial })
        }
    }, [busquedaInicial]);


    const onSubmit = handleSubmit(async data =>{
        navigate(`/busqueda?busqueda=${encodeURIComponent(data.busqueda)}`);
        const resBusqueda = await buscarProducto(data)
        if (onProducto) {
                onProducto(resBusqueda);
            }

    })
    return(
        <>
                <form className="formBusqueda" onSubmit={onSubmit}>
                    <input className="inputBusqueda" type="search" placeholder="Buscar menú" {...register("busqueda")}/>
                    <button type="submit" className="btnFiltros" style={{margin:"0"}}>Buscar</button>
                </form>  
        </>
    )
}