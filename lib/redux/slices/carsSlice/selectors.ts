import type { ReduxState } from '@/lib/redux'

export const selectCars = (state: ReduxState) => state.cars.data;
