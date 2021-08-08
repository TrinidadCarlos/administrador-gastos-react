import React from 'react';
import PropTypes from 'prop-types';

const Alerta = ({mensaje}) => ( 
    <p className="alert alert-danger"> {mensaje} </p>
 )
 
Alerta.propTyper = {
    mensaje: PropTypes.string.isRequired
}
export default Alerta;