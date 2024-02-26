import { DecorSpan, DescriptBox, SpanDesc } from './InfoCar.styled';
export const DescContainer = ({ isModalInfo, carInfo }) => {
  return (
    <DescriptBox style={{ marginBottom: '14px' }}>
      <SpanDesc>
        {isModalInfo && carInfo.address}
        {!isModalInfo && carInfo.address}
        <DecorSpan />
      </SpanDesc>
      <SpanDesc>
        {isModalInfo && `Id: ${carInfo.id}`}
        {!isModalInfo && carInfo.rentalCompany}
        <DecorSpan />
      </SpanDesc>
      <SpanDesc>
        {isModalInfo && `Year:  ${carInfo.year}`}
        {!isModalInfo && carInfo.type}
        <DecorSpan />
      </SpanDesc>
      <SpanDesc>
        {isModalInfo && `Type: ${carInfo.type}`}
        {!isModalInfo && carInfo.model}
        <DecorSpan />
      </SpanDesc>
      <SpanDesc>
        {isModalInfo && `Fuel Consumption: ${carInfo.fuelConsumption}`}
        {!isModalInfo && carInfo.id}
        <DecorSpan />
      </SpanDesc>
      <SpanDesc>
        {isModalInfo && `Engine Size: ${carInfo.engineSize}`}
        {!isModalInfo && carInfo.accessories[0]}
      </SpanDesc>
    </DescriptBox>
  );
};
