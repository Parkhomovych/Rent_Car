import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors';
import { CarsItem } from 'components/CarsItem/CarsItem';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 28px;
`;

export const FavoriteList = () => {
  const cars = useSelector(selectFavoriteCars);
  return (
    <>
      <List>
        {cars.length !== 0
          ? cars?.map(car => <CarsItem key={car.id} carInfo={car} />)
          : 'add Car'}
      </List>
    </>
  );
};
