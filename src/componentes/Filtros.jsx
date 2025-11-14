import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom";
import { filtrarProducto, todosCategorias } from "../api/api"
export function Filtros({onFiltrar, onOcultarFiltros, verCat = true}) {
    const {register, handleSubmit, watch} = useForm({
        defaultValues: {
            precio_prod: 150, // valor inicial igual al máximo
        },
    })
    const [categorias, setCategorias] = useState([])
    const precioActual = watch("precio_prod"); // 50 es el valor inicial

    const [searchParams] = useSearchParams();
    const busqueda = searchParams.get("busqueda");

    useEffect(()=>{
        async function cargarCategorias() {
            const res = await todosCategorias()
            setCategorias(res.data)
        }
        cargarCategorias()
    },[])
    const onSubmit = handleSubmit(async data =>{
        const filtros = {
            ...data,
            ...(busqueda ? { busqueda } : {}) // solo se agrega si existe
        };

        const res = await filtrarProducto(filtros)
        
        if (onFiltrar) {
            onFiltrar(res); // actualiza el estado en el padre
        }
        onOcultarFiltros(); // si también pasas esta función como prop
        console.log(res);
    })
    return(
        <>
            <div className="contentFiltros">
                <form onSubmit={onSubmit}>
                    {verCat && (
                        <>
                            <h4>Categorias:</h4>
                            {categorias.map(categoria =>(
                                <div className="inputFiltros" key={categoria.id_cat}>
                                    <input type="radio" id={categoria.id_cat} value={categoria.id_cat} {...register("categoria_prod",{required:false})} />
                                    <label htmlFor={categoria.id_cat}>{categoria.nombre_cat}</label>
                                </div>
                            ))}
                        </>
                    )}
                    <div style={{marginTop:"10px", display:"flex", flexDirection:"column"}}>
                        <label htmlFor="precio_prod">Precio máximo: <strong>{precioActual} €</strong></label>
                        <input type="range" tabIndex={0} {...register("precio_prod")} min="0" max="150" step="1"/>
                    </div>
                    <div>
                        <button className="btnFiltros" type="submit">Buscar</button>
                    </div>                    
                </form>
            </div>
        </>
    )
}