import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import './index.css';
import { loadChargerList } from "../reducer";

const ChargerList = (props) => {
    const chargerList = useSelector(state => state.chargers.chargerList);
   
    const dispatch = useDispatch();

    useEffect(() => {
        const stored = localStorage.getItem('chargerList');
        const parsed = stored ? JSON.parse(stored) : [];
        dispatch(loadChargerList(parsed));
    }, [dispatch]);


    const sendToParent = (chargerId) => {
        props.sendToParent(chargerId);
    }
    const getChargerList = () => {
        return chargerList.map((charger) => (
            (
                <tr onClick={() => sendToParent(charger.id)} key={charger.id}>
                    <td>{charger.id}</td>
                    <td>{charger.state}</td>
                </tr>
            )
        ))
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
                    { getChargerList()}
                </tbody>
            </table>


        </div>
    )
}

export default ChargerList;