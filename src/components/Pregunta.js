import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Alerta from './Alerta';

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const presupuestoSubmit = (e) => {
        e.preventDefault();
        if (isNaN(cantidad) || cantidad < 1) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }


    return (
        <Fragment>
            <h2>Coloca presupuesto</h2>

            { error ?  <Alerta mensaje={'La cantidad no es válida'}/>  : null }

            <form onSubmit={presupuestoSubmit} noValidate>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="ej. 200"
                    onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
                />

                <input 
                    type="submit" 
                    value="Comenzar a administrar"
                    className="button button-primary u-full-width"
                />
            </form>
        </Fragment>
    )
}


Pregunta.propTypes = {
    setPresupuesto: PropTypes.number.isRequired,
    setRestante: PropTypes.number.isRequired,
    setMostrarPregunta: PropTypes.bool.isRequired
}
export default Pregunta;