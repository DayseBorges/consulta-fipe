import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: CarsSliceState = {
  data: [],
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    getMarcas: (state) => {
      state.data;
    },
  },
});

export interface CarsSliceState {
  data: []
}
