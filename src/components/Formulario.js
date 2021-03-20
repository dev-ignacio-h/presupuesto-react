import { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ guardarGasto, guardarCreargasto }) => {
  const [nombre, guardarNombre] = useState('');
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();
    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
      return;
    }
    // constuir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    console.log(gasto);
    // pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCreargasto(true);

    // resetear el form
    guardarNombre('');
    guardarCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      {error && (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      )}
      <h2>Agrega tus gastos</h2>
      <div className="campo">
        <label htmlFor="">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={e => guardarCantidad(+e.target.value)}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCreargasto: PropTypes.func.isRequired,
};

export default Formulario;
