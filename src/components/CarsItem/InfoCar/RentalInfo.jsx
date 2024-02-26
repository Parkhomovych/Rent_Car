import { RentaSpan, RentalBox, BlueSpan } from './InfoCar.styled';

export const RentalInfo = ({ carInfo }) => {
  const { rentalConditions } = carInfo;
  const items = rentalConditions.split('\n').map(i => {
    if (!i.match(/\d+/)) return <RentaSpan key={i}>{i}</RentaSpan>;

    const number = i?.match(/\d+/)[0]; // шукає любу послідовність чисел '/\d+/'
    return (
      <RentaSpan key={i}>
        {i.slice(0, -number.length)}
        <BlueSpan>{number}</BlueSpan>
      </RentaSpan>
    );
  });

  const formattedNumber = number =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 🤪
  const mileage = formattedNumber(carInfo.mileage);

  return (
    <RentalBox>
      {items}
      <RentaSpan>
        Mileage: <BlueSpan>{mileage}</BlueSpan>
      </RentaSpan>
      <RentaSpan>
        Price: <BlueSpan>{carInfo.rentalPrice}</BlueSpan>
      </RentaSpan>
    </RentalBox>
  );
};
