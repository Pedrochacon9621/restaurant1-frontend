import axios from 'axios'

const apiUrl = axios.create({
    //baseURL: 'http://127.0.0.1:8000/api',
    //baseURL: 'https://light-jeanie-pedrochacon9621-e6fddc30.koyeb.app/api',
    baseURL: 'https://restaurant1-backend.vercel.app/api',
    //baseURL: 'https://restaurant1-backend-ppiv.onrender.com/api',
    /*headers: {
        Authorization: `Bearer ${token}`, // Incluir el token en todas las solicitudes para que el backend valide rol del usuario en todo momento
    },*/
})

export const todosProductos = ()=>{
    return apiUrl.get('/productos/')
}

export const todosProductosCat = ()=>{
    return apiUrl.get('/productosc/')
}

export const todosCategorias = ()=>{
    return apiUrl.get('/categorias/')
}

// Ruta menus con filtro-----------------------------------------------------------------------------------------------------------------------------
export const filtrarProducto = async ({categoria_prod, precio_prod, nombre_prod}) =>{
    const params = new URLSearchParams();
    if (categoria_prod) params.append("categoria_prod", categoria_prod);
    if (precio_prod) params.append("precio_prod__lte", precio_prod);
    if (nombre_prod) params.append("nombre_prod__icontains", nombre_prod);

    try {
    const response = await apiUrl.get(`/productosc/?${params.toString()}`);
    console.log(precio_prod);
    console.log(typeof precio_prod);
    
    return response.data;
  } catch (error) {
    console.error("Error al buscar platos:", error);
    return [];
  }

}
//BARRA DE BUSQUEDA:
export const buscarProducto = async ({busqueda}) => {
  const params = new URLSearchParams();
  if (busqueda) params.append("busqueda", busqueda);

  try {
    const response = await apiUrl.get(`/productosc/?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error("Error al buscar productos:", error);
    return [];
  }
};

// Ruta menus con filtro-----------------------------------------------------------------------------------------------------------------------------