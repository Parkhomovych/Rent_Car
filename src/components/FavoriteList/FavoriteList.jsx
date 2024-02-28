import { useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors';
import { CarsItem } from 'components/CarsItem/CarsItem';
import { List } from './FavoriteList.styled';

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
