export function TarjetaProd({producto}) {
    return(
        <div>
            <div className="divTarjeta">
                <div>
                    <h3 className="nombreProd">{producto.nombre_prod}</h3>
                    <ul>
                        <li><div className="contentImgProd"><img className="imgProduc" src={producto.img_prod} alt={producto.nombre_prod} /></div></li>
                        <li><strong>Descripción:</strong> {producto.descripcion_prod}</li>
                        <li><strong>Precio:</strong> {producto.precio_prod}</li>
                        <li><strong>Categoria:</strong> {producto.categoria_prod?.nombre_cat || "Sin categoría"}</li>
                        <li><strong>Disponible:</strong> {producto.disponible ? "si" : "no"}</li>
                        <li><strong>Preparación:</strong> {producto.tiempo_preparacion} minutos</li>
                        <li><strong>Destacado:</strong> {producto.destacado ? "si" : "no"}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}