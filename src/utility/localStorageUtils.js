export const loadChargersFromStorage = () => {
  try {
    const data = localStorage.getItem('chargerList');
    if (!data) return [];
    const parsed = JSON.parse(data);

    for (const charger of parsed) {
      if (typeof charger.id === 'undefined' || typeof charger.state === 'undefined') {
        throw new Error('Invalid charger object structure');
      }
    }

    return parsed;
  } catch (error) {
    console.error('Failed to load chargerList from localStorage:', error);
    return { error: error.message };
  }
};


export const saveChargersToStorage = (chargerList) => {
  try {
    if (!chargerList) {
      throw new Error('Invalid charger object structure');
    }

    for (const charger of chargerList) {
      if (typeof charger.id === 'undefined' || typeof charger.state === 'undefined') {
        throw new Error('Invalid charger object structure');
      }
    }

    const stringified = JSON.stringify(chargerList);

    localStorage.setItem('chargerList', stringified);
    return { isSucess: true };
  } catch (error) {
    console.error('Failed to create charger:', error);
    return { error: error.message, isSucess: false };
  }

};
