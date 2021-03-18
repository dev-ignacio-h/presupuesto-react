import { useState } from 'react';

const Pregunta = () => {
  // Definir state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Función que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(+e.target.value);
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    // Validad
    if(cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    // Si pasa la validación

    guardarError(false);
  };

  return (
    <>
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

export default Pregunta;
