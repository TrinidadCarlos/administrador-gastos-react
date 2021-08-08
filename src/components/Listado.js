import React from 'react';
import PropTypes from 'prop-types';

const Listado = ({gastos, removerGasto}) => ( 
    <div className="gastos-realizados">
        {
            gastos.map(g => (
                <ul key={g.id}>
                    <li className="gasto-detalle"> 
                        <p>Gasto: <span>{g.nombreGasto}</span></p>
                        <p>Costo: <span>${g.cantidadGasto}</span></p> 
                        <button className="button buttom-primary" onClick={() => removerGasto(g.id  )}> Remover Gasto</button>
                    </li>
                </ul>
            ))
        }
    </div>
 )
 
 Listado.propTypes = {
     gastos: PropTypes.array.isRequired,
     removerGasto: PropTypes.func.isRequired
 }
export default Listado;