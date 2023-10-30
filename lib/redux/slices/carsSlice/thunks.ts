import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchApiFipe } from './fetchApiFipe'
import { carsSlice } from '@/lib/redux'


export const fetchDataFromApi = createAppAsyncThunk('cars/fetchDataFromApi', async (_, { dispatch }) => {
  try {
    const response = await fetchApiFipe()
    
    return response;
  } catch (error) {
    console.log(error);
    
    throw error;
  }
})
