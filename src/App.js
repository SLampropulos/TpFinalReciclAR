import logo from './logo.svg';
import './App.css';
import NavBar from './Conponentes/NavBar/NavBar';
import InicioContainer from './Conponentes/Inicio/InicioContainer';
import FormasReciclarContainer from './Conponentes/FormasReciclar/FormasReciclarContainer';

import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          
          <Switch>
            <Route exact path="/">
              <InicioContainer />
            </Route>
            <Route exact path="/PuntosVerdes">
              
              <h1>2222</h1>
            </Route>
            <Route exact path="/Comoreciclar">
              <h1>AAAA</h1>
            </Route>
            <Route exact path="/ONGyAsociaciones">
              <h1>ONG y Asociaciones</h1>
            </Route>
            <Route exact path="/Compost">
              <h1>Compost</h1>
            </Route>
            <Route exact path="/Formasdereciclar">
              <FormasReciclarContainer />
            </Route>
          </Switch>
          
        </div>
      </BrowserRouter>
  );
}

export default App;
