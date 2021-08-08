import React, { Fragment, useState } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from './components/Listado';
import Alerta from './components/Alerta';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [error, setError] = useState(false);


  const agregarGasto = gasto => {
    if (gasto.cantidadGasto > restante) {
      setError(true);
    }else{
      setGastos([...gastos, gasto]);
      setRestante(restante - gasto.cantidadGasto );
      setError(false);
    }
  }

  const removerGasto = (idGasto) => {
    const gastoDetalle = gastos.filter(g => g.id === idGasto);
    setRestante(restante + gastoDetalle[0].cantidadGasto);
    const gastosActualizados = gastos.filter(g => g.id !== idGasto);
    setGastos(gastosActualizados);
  }


  return (
    <Fragment>
      <header>
        <h1>Administra tus gastos</h1>
      </header>

      {mostrarPregunta ? 
      (
        <div className="contenido-principal gasto ">
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarPregunta={setMostrarPregunta}
          />
        </div>
      ) : 
      (
        <div className="row contenido-principal admin-panel">
          <div className="one-half column">
            <Formulario agregarGasto={agregarGasto}/>
          </div>
          <div className="one-half column">
            <h2>Listado de gastos</h2>
              {error ? <Alerta mensaje={'Este gasto supera tu restante. No se agrega'}/> : null}
                 <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
                <Listado gastos={gastos} removerGasto={removerGasto}/>       
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;
