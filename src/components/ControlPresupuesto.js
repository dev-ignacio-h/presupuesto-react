import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        restante: {restante}
      </div>
    </>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
