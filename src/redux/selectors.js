// import { createSelector } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

export const filterBrand = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];
export const selectCars = state => state.cars.carsList;
export const selectFilters = state => state.cars.filters;
export const selectFavoriteCars = state => state.cars.favoriteList;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

// export const selectFilteredCars = createSelector(
//   [selectCars, selectFilters],
//   (cars, filters) => {
//     const filterCars = [];
//     return filterCars;
//   }
// );
