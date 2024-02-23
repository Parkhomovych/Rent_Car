import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { CarsItem } from 'components/CarsItem/CarsItem';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 28px;
`;

export const CarsList = () => {
  const cars = useSelector(selectCars);

  return (
    <>
      <List>
        {cars.length !== 0
          ? cars?.map(car => <CarsItem key={car.id} carInfo={car} />)
          : 'loadCars'}
      </List>
    </>
  );
};
