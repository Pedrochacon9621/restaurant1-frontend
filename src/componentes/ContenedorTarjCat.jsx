import { useEffect, useState } from "react";
import { todosProductosCat } from "../api/api";
import { TarjetaProd } from "./TarjetaProd";

export function ContenedorTarjCat() {
  const [productos, setProductos] = useState([]);
  const [categoriasVisibles, setCategoriasVisibles] = useState({});

  // Alternar visibilidad de tarjetas por categoría
  function toggleCategoria(id_cat) {
    setCategoriasVisibles((prev) => ({
      ...prev,
      [id_cat]: !prev[id_cat],
    }));
  }

  useEffect(() => {
    async function cargarProductosCat() {
      const resProductos = await todosProductosCat();
      setProductos(resProductos.data);
    }
    cargarProductosCat();
  }, []);

  // Agrupar productos por id_cat (maneja null como "sin_categoria")
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

  return (
    <div>
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


