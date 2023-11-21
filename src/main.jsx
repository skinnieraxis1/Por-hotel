import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Routes,
  Route
} from 'react-router-dom';
import Inicio from './Inicio';
import Hotel from './hotel';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      Aca hay un error que no logramos resolver, por si lo queres ver profe

    <Router>
      <Route path="/" component={Inicio} />
      <Route path="/inicio" component={Inicio} />
      <Route path="/hotel" component={Hotel} />
    </Router>
    */}

    <Inicio/>
  </React.StrictMode>
);
