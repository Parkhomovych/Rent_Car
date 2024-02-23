import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL =
  'https://65d55d903f1ab8c63436cee2.mockapi.io/api/advert';

export const getCars = createAsyncThunk('car/getCars', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
