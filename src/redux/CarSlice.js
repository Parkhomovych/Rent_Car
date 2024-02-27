import { createSlice } from '@reduxjs/toolkit';
import { loadMoreCars, getCars } from './operations';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    favoriteList: [],
    showLoadMore: true,
    filters: {
      brand: '',
      price: '',
      from: '',
      to: '',
    },
    error: null,
    isLoading: false,
  },
  reducers: {
    filtersCars(state, action) {
      // тут в payload має прилітати обʼєкт фільтрів
      state.filters = action.payload;
    },
    addFavoriteCars(state, action) {
      // тут в payload має прилітати обʼєкт однієї машини
      state.favoriteList = [...state.favoriteList, action.payload];
    },
    // тут в payload має прилітати ID однієї машини
    removeFavoriteCar(state, action) {
      state.favoriteList = state.favoriteList.filter(
        item => item.id !== action.payload
      );
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
        console.log(action.payload);
        state.carsList = [...action.payload];
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.showLoadMore = action.payload?.length >= 12 ? true : false;
        state.carsList = [...state.carsList, ...action.payload];
      })
      .addCase(loadMoreCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const carsReduser = carSlice.reducer;
export const { filtersCars, addFavoriteCars, removeFavoriteCar } =
  carSlice.actions;
