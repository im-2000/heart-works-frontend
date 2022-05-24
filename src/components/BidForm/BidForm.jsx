import { useDispatch, useSelector } from "react-redux";
import {
  increaseThermostat,
  decreaseThermostat,
} from "../../store/house/slice";
import { selectThermostat } from "../../store/house/selectors";

export const Thermostat = (power) => {
  const dispatch = useDispatch();
  //   const thermostat = useSelector(selectThermostat);

  return (
    <div className="thermostat">
      <button>+</button>

      <div>Thermostat power = {}</div>
      <button>-</button>
    </div>
  );
};
