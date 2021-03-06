import { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  // Definir state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(+e.target.value);
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    // Validad
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // Si pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <>
      {error && <Error mensaje={'El Presupuesto es Incorrecto'} />}
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
