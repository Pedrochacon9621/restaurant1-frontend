import { useEffect, useState, useRef } from "react";
import { todosProductos } from "../api/api";
import { TarjetaProd } from "./TarjetaProd";
import { Barrabusqueda } from "./BarraBusqueda";
import { Filtros } from "./Filtros";
export function ContenedorTarj() {
    const[productos, setProductos]=useState([]);
    const [mostrarFiltros, setMostrarFiltros] = useState(false); // para la muestra del componente filtros
    const filtrosRef = useRef(null);// para la muestra del componente filtros
    /*useEffect(()=>{
        async function cargarProductos() {
            const resProductos = await todosProductos();
            setProductos(resProductos.data)
        }
        cargarProductos();
    },[])*/
    
    // useEffect para la muestra del componente filtros:
    useEffect(() => {
        function handleClickOutside(event) {
        if (filtrosRef.current && !filtrosRef.current.contains(event.target)) {
            setMostrarFiltros(false);
        }
        }
        if (mostrarFiltros) {
        document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mostrarFiltros]);

    function buscarProducto(producto) {
        setProductos(producto)
    }

    // FUncion para actualizar productos POR FILTRO---- Esta se pasa al componente de FILTROS---
    function actualizarProductosFiltrados(productosFiltrados) {
        setProductos(productosFiltrados);
    }
    //para quitar modal de filtros al hacer la busqueda filtrada:
    function ocultarFiltros() {
        setMostrarFiltros(false)
    }


    return(
        <div>
            <div className="content-barra-contenedorTarj">
                <div className="contentBTNyComp" style={{marginRight:"10px"}}>
                    <div style={{display:"flex", gap:"10px"}}>
                        <div className="tituloCat" style={{width:"120px", padding:"0"}} onClick={() => setMostrarFiltros((prev) => !prev)}><p>-- Filtrar --</p></div>
                    </div>
                    {mostrarFiltros && (
                        <div className="compFiltros" ref={filtrosRef}>
                        <Filtros onFiltrar={actualizarProductosFiltrados} onOcultarFiltros={ocultarFiltros} verCat={false}/>
                        </div>
                    )}
                </div>    
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