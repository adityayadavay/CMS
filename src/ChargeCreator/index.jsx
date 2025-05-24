import { useState, useEffect, useCallback } from 'react';
import { addCharger } from '../reducer';
import './index.css';
import { useDispatch } from 'react-redux';
import { ADDED_CHARGER, CREATE_CHARGER, ERROR } from '../utility/constants';
import { loadChargersFromStorage, saveChargersToStorage } from '../utility/localStorageUtils';

const ChargeCreator = () => {
    const [isDisplaySucess, setIsDisplaySuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isDisplaySucess) {
            setTimeout(() => {
                setIsDisplaySuccess(false);
            }, 2500)
        } else if (isError) {
            setTimeout(() => {
                setIsError(false);
            }, 2500)
        }
    }, [isDisplaySucess, isError]);

    const createCharger = useCallback(() => {
        let chargerList = loadChargersFromStorage();
        const lastId = chargerList && chargerList.length ? chargerList[chargerList.length - 1].id + 1 : 1;
        const newChargerObj = { id: lastId, state: 'offline' };
        chargerList.push(newChargerObj);

        const result = saveChargersToStorage(chargerList);
        if (result && result.isSucess) {
            dispatch(addCharger({ chargerList: chargerList }));
            setIsError(false);
            setIsDisplaySuccess(true);
        } else if (result && !result.isSucess) {
            setIsError(true);
        }
    }, [dispatch])

    return (
        <>
            <div className='chargeCreator'>
                <button onClick={createCharger}>{CREATE_CHARGER}</button>
                {isDisplaySucess ? <p>{ADDED_CHARGER}</p> : null}
                {isError ? <p>{ERROR}</p> : null}
            </div>

        </>
    )
}
export default ChargeCreator;