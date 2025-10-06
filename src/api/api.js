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