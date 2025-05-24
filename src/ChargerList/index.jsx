import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { ERROR, NO_CHARGER_FOUND } from "../utility/constants";
import { selectChargerId } from '../reducer';
import { useCallback } from 'react';

const ChargerList = (props) => {
    const { chargerList, error } = useSelector(state => state.chargers);
    const dispatch = useDispatch();

    const selectIdOfCharger = useCallback((chargerId) => {
        dispatch(selectChargerId({ selectedChargerId: chargerId }));
    }, [dispatch]);

    const getChargerList = () => {
        return chargerList.map((charger) => (
            (
                <tr onClick={() => selectIdOfCharger(charger.id)} key={charger.id}>
                    <td>{charger.id}</td>
                    <td>{charger.state}</td>
                </tr>
            )
        ))
    }
    const noChargerHTML = <tr><td colSpan={2} className="nocharger">{NO_CHARGER_FOUND}</td></tr>;
    const errorHTML = <tr><td colSpan={2} className="nocharger">{ERROR}</td></tr>;

    const generateHTML = () => {
        if (error) {
            return errorHTML;
        } else {
            return chargerList && chargerList.length ? getChargerList() : noChargerHTML;
        }
    }
    return (
        <div className="chargerlist">
            <table>
                <thead>
                    <tr>
                        <th>Charger ID</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {generateHTML()}
                </tbody>
            </table>


        </div>
    )
}

export default ChargerList;