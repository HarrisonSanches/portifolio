// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Graduation from "./pages/graduation";
import Home from "./pages/home";
import MainPage from "./pages/mainPage";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbartop } from "./components/navbartop/navbartest";

// DEFININDO AS ROTAS
// Também tenho as funções para chamar as páginas

const Rotas = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <Navbartop />
            <AnimatePresence exitBeforeEnter initial={true}>
              <Switch location={location} key={location.pathname}>
                <Route component={Graduation} path="/graduation" exact />
                <Route component={MainPage} path="/main" exact />
                <Route component={Home} path="/" exact />
              </Switch>
            </AnimatePresence>
          </>
        )}
      />

      {/* adicionar as rotas futuramente. exemplo abaixo*/}
      {/* <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route component={Graduation} path="/graduation" exact />
          <Route component={MainPage} path="/main" exact />
          <Route component={Home} path="/" exact />
        </Switch>
      </AnimatePresence> */}
    </Router>
  );
};

// ---------------------FLUXO DE ROTAS ------------------------
// A pagina index.html (na pasta public) tem uma div root
// Essa div busca o index.tsx dentro do src
// O index renderiza o app.tsx
// o APP.tsx busca o route.tsx
// E o route.tsx chaveia para a pagina que está na rota

export default Rotas;
