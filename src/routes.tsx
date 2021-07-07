import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import MainPage from "./pages/mainPage";

// DEFININDO AS ROTAS
// Também tenho as funções para chamar as páginas

const Rotas = () => {
  return (
    <BrowserRouter>
      {/* adicionar as rotas futuramente. exemplo abaixo*/}
      <Route component={Home} path="/" exact />
      <Route component={MainPage} path="/main" exact />
    </BrowserRouter>
  );
};

// ---------------------FLUXO DE ROTAS ------------------------
// A pagina index.html (na pasta public) tem uma div root
// Essa div busca o index.tsx dentro do src
// O index renderiza o app.tsx
// o APP.tsx busca o route.tsx
// E o route.tsx chaveia para a pagina que está na rota

export default Rotas;
