import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import login from "./pages/login"
import Authentication from "./pages/authentication"
import Home from "./pages/home"

// DEFININDO AS ROTAS
// Também tenho as funções para chamar as páginas

const Rotas = () => {
    return (
        <BrowserRouter>
            {/* adicionar as rotas futuramente. exemplo abaixo*/}
            <Route component={login} path="/login" exact />
            <Route component={Authentication} path="/authentication" exact />
            <Route component={Home} path="/home" exact />

        </BrowserRouter>

    )
}

// ---------------------FLUXO DE ROTAS ------------------------
// A pagina index.html (na pasta public) tem uma div root
// Essa div busca o index.tsx dentro do src
// O index renderiza o app.tsx
// o APP.tsx busca o route.tsx
// E o route.tsx chaveia para a pagina que está na rota

export default Rotas;