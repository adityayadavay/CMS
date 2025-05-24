import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadChargerList, setLoadError } from './reducer';
import { loadChargersFromStorage } from './utility/localStorageUtils';

const StateHydrator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const result = loadChargersFromStorage();
    if (result && result.error) {
      dispatch(loadChargerList({ chargerList: [] }));
      dispatch(setLoadError({ error: result.error }));
    } else {
      dispatch(loadChargerList({ chargerList: result }));
    }
  }, [dispatch]);

  return null;
};

export default StateHydrator;
