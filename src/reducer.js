import { createSlice } from '@reduxjs/toolkit';

const chargerSlice = createSlice({
  name: 'chargers',
  initialState: {
    chargerList: [],
    selectedChargerId: 0,
    error: null
  },
  reducers: {
    loadChargerList: (state, action) => {
      state.chargerList = [...action.payload.chargerList];
      state.error = null;
      state.selectedChargerId = 0;
    },
    addCharger: (state, action) => {
      state.chargerList = [...action.payload.chargerList];
      state.error = null;
      state.selectedChargerId = 0;
    },
    updateChargerState: (state, action) => {
      state.chargerList = [...action.payload.chargerList];
      state.error = null;
    },
    selectChargerId: (state, action) => {
      state.selectedChargerId = action.payload.selectedChargerId;
    },
    setLoadError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const { loadChargerList, addCharger, updateChargerState, selectChargerId, setLoadError } = chargerSlice.actions;
export default chargerSlice.reducer;