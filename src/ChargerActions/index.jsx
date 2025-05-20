import { useEffect, useState } from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { updateChargerState } from "../reducer";

const ChargeActions = ({ chargerId }) => {
    const chargerList = useSelector(state => state.chargers.chargerList);
    const [charger, setCharger] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        const charger = chargerList.find(charger => charger.id === chargerId);
        setCharger(charger);
    }, [chargerId]);

    const updateStateValue = (event) => {
        const updatedList = chargerList.map((chargeObj) => {
        if(charger.id === chargeObj.id) {
          return {...chargeObj,state: event.target.value}
        } else {
          return chargeObj
        }
      });
      const newCharger = {...charger,state:event.target.value};
      setCharger(newCharger);
      dispatch(updateChargerState(updatedList))
    }
    return (
        <div className="chargeactions">
            {
                charger ? <>
                    <h2>Update State for {charger.id}</h2>
                    <p>Charger Number: {charger.id}</p>
                    <select value={charger.state} onChange={(e) => updateStateValue(e)}>
                        <option value={'offline'}> Offline </option>
                        <option value={'charging'}>Charging</option>
                        <option value={'ready'}>Ready</option>
                        <option value={'fault'}>Fault</option>
                    </select>
                </> : <p>No charger selected or charger not found.</p>
            }
        </div>
    )
}
export default ChargeActions;