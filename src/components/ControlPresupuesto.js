import React, { Fragment } from "react";
import {revisarPresupuesto} from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {

  return (
    <Fragment>
      <ul className="control-gastos ">
        <li className="alert alert-primary">Presupuesto: ${presupuesto}</li>
        <li className={revisarPresupuesto(presupuesto, restante)}>Restante: ${restante}</li>
      </ul>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default ControlPresupuesto;
