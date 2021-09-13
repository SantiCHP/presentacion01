import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./pages/Header/Header.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Galeria from "./pages/Galeria/Galeria.jsx";
import Coleccion from "./pages/Coleccion/Coleccion.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
     <Switch>
        <Route exact path='/tsundoku/inicio'>
         <Inicio />
       </Route>
       <Route exact path='/tsundoku/galeria'>
         <Galeria />
       </Route>
       <Route exact path='/tsundoku/coleccion'>
         <Coleccion />
       </Route>
       <Redirect to="/tsundoku/inicio"/>
     </Switch>
     <Footer />
   </Router>
    </div>
  );
}

export default App;
