import { createSlice } from '@reduxjs/toolkit';


const chargerSlice = createSlice({
  name: 'chargers', 
  initialState: {
    chargerList:[],
  },   
  reducers: {
    loadChargerList: (state, action) => {
      state.chargerList= action.payload;
    },
    addCharger: (state, action) => {
      state.chargerList.push(action.payload);
      localStorage.setItem('chargerList', JSON.stringify(state.chargerList));
    },
    updateChargerState: (state, action) => {
      localStorage.setItem('chargerList', JSON.stringify(action.payload));
      state.chargerList = [...action.payload];
    }
  }
});

export const { loadChargerList, addCharger, updateChargerState } = chargerSlice.actions;


export default chargerSlice.reducer;
