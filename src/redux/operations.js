import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://65d55d903f1ab8c63436cee2.mockapi.io/api/advert';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (pagination = 'p=1', thunkAPI) => {
    try {
      const response = await axios.get(`/?${pagination}&l=12`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
