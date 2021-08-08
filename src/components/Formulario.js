import React, { Fragment, useState } from "react";
import Alerta from './Alerta';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({agregarGasto}) => {

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);
    const validarGasto = e => {
        e.preventDefault();

        if (nombreGasto.trim() === '' || isNaN(cantidadGasto) || cantidadGasto < 1) {
            setError(true);
            return;
        }
        setError(false);
        
        const gasto = {
            id: shortid.generate(),
            nombreGasto,
            cantidadGasto
        }

        agregarGasto(gasto);
        setCantidadGasto(0);

    }


  return (
    <Fragment>
      <h2>Gasto</h2>
    {
        error
        ?
            <Alerta mensaje='Revisar que los campos sean correctos o no nulos' />
        :
        null
    }

      <form onSubmit={validarGasto}>
        <div className="campo">
          <label>Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Comida"
            onChange={e => setNombreGasto(e.target.value)}
            value={nombreGasto}
          />
        </div>

        <div className="campo">
          <label>Cantidad Gasto</label>
          <input 
          type="number" 
          className="u-full-width" 
          placeholder="Ej. 200" 
          onChange={e => setCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
          />
        </div>

        <input
          type="submit"
          className="button button-primary"
          value="Agregar gasto"
        />
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  agregarGasto: PropTypes.array.isRequired
}
export default Formulario;
