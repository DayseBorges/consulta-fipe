import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CarsSliceState = {
  data: [],
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    getMarcas: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
  },
});

export interface CarsSliceState {
  data: []
}

export const { getMarcas } = carsSlice.actions;