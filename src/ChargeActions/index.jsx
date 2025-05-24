import { useCallback, useEffect, useState } from "react";
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { updateChargerState } from "../reducer";
import { ERROR, NO_CHARGER_SELECTED } from "../utility/constants";
import { saveChargersToStorage } from "../utility/localStorageUtils";

const ChargeActions = () => {
    const { chargerList, selectedChargerId } = useSelector(state => state.chargers);
    const [charger, setCharger] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        const charger = chargerList.find(charger => charger.id === selectedChargerId);
        setCharger(charger);
    }, [selectedChargerId, chargerList]);

    const updateStateValue = useCallback((event) => {
        const updatedList = chargerList.map((chargeObj) => {
            if (charger.id === chargeObj.id) {
                return { ...chargeObj, state: event.target.value }
            } else {
                return chargeObj
            }
        });
        const newCharger = { ...charger, state: event.target.value };
        setCharger(newCharger);
        const result = saveChargersToStorage(updatedList);
        if (result && result.isSucess) {
            dispatch(updateChargerState({ chargerList: updatedList }));
            setError(false)
        } else if (result && !result.isSucess) {
            setError(true);
        }
    }, [charger, chargerList, dispatch])
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
                    {error ? <p className="error">{ERROR}</p> : null}


                </> : <p>{NO_CHARGER_SELECTED}</p>
            }
        </div>
    )
}
export default ChargeActions;