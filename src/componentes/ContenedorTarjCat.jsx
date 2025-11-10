import { useEffect, useState, useRef } from "react";
import { todosProductosCat } from "../api/api";
import { TarjetaProd } from "./TarjetaProd";
import { Filtros } from "./Filtros";
import { Barrabusqueda } from "./BarraBusqueda";

export function ContenedorTarjCat() {
  const [productos, setProductos] = useState([]);
  const [categoriasVisibles, setCategoriasVisibles] = useState({});
  const [cargando, setCargando] = useState(true);
  const [mostrarFiltros, setMostrarFiltros] = useState(false); // para la muestra del componente filtros
  const filtrosRef = useRef(null);// para la muestra del componente filtros
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

  // Alternar visibilidad de tarjetas por categoría
  function toggleCategoria(id_cat) {
    setCategoriasVisibles((prev) => ({
      ...prev,
      [id_cat]: !prev[id_cat],
    }));
  }

//Logica y useEffect para cargar todos los productos:
  async function cargarProductosCat() {
      setCargando(true); // Inicia carga
      const resProductos = await todosProductosCat();
      setProductos(resProductos.data);
      setCargando(false); // Finaliza carga
  }
  useEffect(() => {
    cargarProductosCat();
  }, []);

  // Agrupar productos por id_cat (maneja null como "sin_categoria"):
  const productosPorCategoria = productos.reduce((grupo, producto) => {
    const id_cat = producto.categoria_prod?.id_cat ?? "sin_categoria";
    const nombre_cat = producto.categoria_prod?.nombre_cat?.trim() || "Sin categoría";

    if (!grupo[id_cat]) {
      grupo[id_cat] = {
        categoria: { id_cat, nombre_cat },
        productos: [],
      };
    }
    grupo[id_cat].productos.push(producto);
    return grupo;
  }, {});

// FUncion para actualizar productos POR FILTRO---- Esta se pasa al componente de FILTROS---
  function actualizarProductosFiltrados(productosFiltrados) {
    setProductos(productosFiltrados);
  }
//para quitar modal de filtros al hacer la busqueda filtrada:
function ocultarFiltros() {
  setMostrarFiltros(false)
}

//funcion para quitar filtros:
function quitarFiltros() {
  cargarProductosCat()
}

if (cargando) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Cargando menús...</div>;
}

  return (
    <div>
      <div className="contentBTNyComp">
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex", gap:"10px"}}>
              <div className="tituloCat" style={{width:"120px", padding:"0"}} onClick={() => setMostrarFiltros((prev) => !prev)}><p>-- Filtrar --</p></div>
              <p style={{textDecoration:"underline", cursor:"pointer"}} onClick={()=>{quitarFiltros()}}>Quitar filtros</p>
            </div>
            <Barrabusqueda/>
        </div>
          {mostrarFiltros && (
            <div className="compFiltros" ref={filtrosRef}>
              <Filtros onFiltrar={actualizarProductosFiltrados} onOcultarFiltros={ocultarFiltros}/>
            </div>
          )}
      </div>
      <h1 style={{ textAlign: "center" }}>Lista de Menús</h1><hr /><br /><br />
      {Object.values(productosPorCategoria).map(({ categoria, productos }) => {
        const visible = categoriasVisibles[categoria.id_cat];
        return (
          <div key={categoria.id_cat}>
            <h1 className="tituloCat" onClick={() => toggleCategoria(categoria.id_cat)}> {categoria.nombre_cat} <img className={`flecha ${visible ? "flecha-activa" : ""}`} src="/iconos/arrowAbajo.svg" alt="" style={{ marginLeft: "30px" }}/></h1><br />
            <div className={`contentTarjetas ${ !visible ? "contentTarjetas-oculto" : ""}`}>
              {productos.map((producto) => (
                <TarjetaProd key={producto.id_prod} producto={producto} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}


