    import { useState,useEffect } from 'react';
    import { addCharger } from '../reducer';
    import './index.css';
    import { useDispatch } from 'react-redux';

    const ChargeCreator = () => {
        const [isDisplaySucess, setIsDisplaySuccess] = useState(false);
        const dispatch = useDispatch();
        useEffect(() => {
            setTimeout(() => {
                setIsDisplaySuccess(false);
            }, 2500)
        }, [isDisplaySucess]);

        const createCharger = () => {
            let chargerList = JSON.parse(localStorage.getItem('chargerList'));

            const lastId = chargerList ? chargerList[chargerList.length - 1].id + 1 : 1;
            const newChargerObj = { id: lastId, state: 'offline' };

            dispatch(addCharger(newChargerObj));
            setIsDisplaySuccess(true);
        }
        return (
            <>
                <div className='chargeCreator'>
                    <button onClick={createCharger}>Create a Charger</button>
                    {isDisplaySucess ? <p>Charger has been added !!</p> : null}
                </div>
                
            </>
        )
    }
    export default ChargeCreator;