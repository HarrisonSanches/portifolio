import axios from "axios"

// URL DA MINHA API
// Também posso criar váriavel de ambiente
const api = axios.create({
    baseURL: "teste"
})

export default api;