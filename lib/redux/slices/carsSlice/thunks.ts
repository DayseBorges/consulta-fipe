import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchApiFipe } from './fetchApiFipe'

export const fetchDataFromApi = createAppAsyncThunk('cars/fetchDataFromApi', async (_, { dispatch }) => {
  try {
    const response = await fetchApiFipe()
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.log(error);
    
    throw error;
  }
})
