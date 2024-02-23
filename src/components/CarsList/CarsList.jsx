import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { CarsItem } from 'components/CarsItem/CarsItem';
import styled from 'styled-components';
import { getCars } from '../../redux/operations';
import { useRef } from 'react';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 28px;
`;
const BtnLoadMore = styled.button`
  padding: 50px;
`;
export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useRef(1);
  const loadMore = () => {
    dispatch(getCars(page + 1));
  };

  return (
    <>
      <List>
        {cars.length !== 0
          ? cars?.map(car => <CarsItem key={car.id} carInfo={car} />)
          : 'loadCars'}
      </List>
      <BtnLoadMore onClick={loadMore} type="button">
        load more
      </BtnLoadMore>
    </>
  );
};
