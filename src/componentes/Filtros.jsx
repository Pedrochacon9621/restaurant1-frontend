import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { filtrarProducto, todosCategorias } from "../api/api"
export function Filtros() {
    const {register, handleSubmit, watch} = useForm()
    const [categorias, setCategorias] = useState([])
    const precioActual = watch("precio_prod", 50); // 50 es el valor inicial
    useEffect(()=>{
        async function cargarCategorias() {
            const res = await todosCategorias()
            setCategorias(res.data)
        }
        cargarCategorias()
    },[])
    const onSubmit = handleSubmit(async categoria =>{
        const res = await filtrarProducto(categoria)
        console.log(res);
        
    })
    return(
        <>
            <div className="contentFiltros">
                <form onSubmit={onSubmit}>
                    <h4>Categorias:</h4>
                    {categorias.map(categoria =>(
                        <div className="inputFiltros">
                            <input type="radio" id={categoria.id_cat} value={categoria.id_cat} {...register("categoria_prod",{required:false})} />
                            <label htmlFor={categoria.id_cat}>{categoria.nombre_cat}</label>
                        </div>
                    ))}
                    <div style={{marginTop:"10px", display:"flex", flexDirection:"column"}}>
                        <label htmlFor="precio_prod">Precio máximo: <strong>{precioActual} €</strong></label>
                        <input type="range" {...register("precio_prod")} min="0" max="100" step="1"/>
                    </div>
                    <div className="">
                        <button className="btnFiltros" type="submit">Buscar</button>
                    </div>                    
                </form>
            </div>
        </>
    )
}