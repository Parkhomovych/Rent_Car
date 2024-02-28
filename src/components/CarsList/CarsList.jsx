import { selectFilteredCars, selectShowLoadMore } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreCars } from '../../redux/operations';
import { CarsItem } from 'components/CarsItem/CarsItem';
import * as Styled from './CarsListStyle';
import { useState } from 'react';

export const CarsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const serchMoreCars = () => {
    dispatch(loadMoreCars(page + 1));
    setPage(pS => pS + 1);
  };

  const Filteredcars = useSelector(selectFilteredCars);
  const showLoadMore = useSelector(selectShowLoadMore);
  return (
    <>
      <Styled.List>
        {Filteredcars.length !== 0 &&
          Filteredcars?.map(car => <CarsItem key={car.id} carInfo={car} />)}
      </Styled.List>
      {showLoadMore && (
        <Styled.LoadMore onClick={serchMoreCars}>Load More</Styled.LoadMore>
      )}
    </>
  );
};
