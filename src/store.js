import { configureStore } from '@reduxjs/toolkit';
import chargerReducer from './reducer';

const store = configureStore({
  reducer: {
    chargers: chargerReducer,
  }
});

export default store;
