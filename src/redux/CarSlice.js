import { createSlice } from '@reduxjs/toolkit';
import { getCars } from './operations';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    carList: [],
    favoriteList: [],
    filters: {
      brand: '',
      priceHour: 0,
      carMileage: {
        from: 0,
        to: 0,
      },
    },
    error: null,
    isLoading: false,
  },
  reducers: {
    filtersCar(state, action) {
      // тут в payload має прилітати обʼєкт фільтрів
      state.filters = action.payload;
    },
    addFavoriteCar(state, action) {
      // тут в payload має прилітати обʼєкт однієї машини
      state.favoriteList = [...state.favoriteList, action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, (state, a) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carList = [...action.payload];
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const carsReduser = carSlice.reducer;
export const { filtersCar, addFavoriteCar } = carSlice.actions;
