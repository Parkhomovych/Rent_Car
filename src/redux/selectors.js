import { createSelector } from '@reduxjs/toolkit';

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
export const selectPage = state => state.cars.page;
export const selectFilters = state => state.cars.filters;
export const selectFavoriteCars = state => state.cars.favoriteList;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectShowLoadMore = state => state.cars.showLoadMore;
export const selectFilteredCars = createSelector(
  [selectCars, selectFilters],
  (cars, filters) => {
    const result = cars.filter(
      i =>
        i.make.includes(filters.brand) &
        (i.rentalPrice.slice(1) <= Number(filters.price) ||
          filters.price === '0') &
        (i.mileage >= Number(filters.from)) &
        (i.mileage <= Number(filters.to) || filters.to === '')
    );
    console.log(result);
    return result;
  }
);
