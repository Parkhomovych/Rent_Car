import * as ItemStyle from './Carsitem.styled';
export const DescContainer = ({ carInfo }) => {
  return (
    <ItemStyle.DescriptBox>
      <ItemStyle.SpanDesc>
        {carInfo.address}
        <ItemStyle.DecorSpan />
      </ItemStyle.SpanDesc>
      <ItemStyle.SpanDesc>
        {carInfo.rentalCompany}
        <ItemStyle.DecorSpan />
      </ItemStyle.SpanDesc>
      <ItemStyle.SpanDesc>
        {carInfo.type}
        <ItemStyle.DecorSpan />
      </ItemStyle.SpanDesc>
      <ItemStyle.SpanDesc>
        {carInfo.model}
        <ItemStyle.DecorSpan />
      </ItemStyle.SpanDesc>
      <ItemStyle.SpanDesc>
        {carInfo.id}
        <ItemStyle.DecorSpan />
      </ItemStyle.SpanDesc>
      <ItemStyle.SpanDesc $after={false}>
        {carInfo.accessories[0]}
      </ItemStyle.SpanDesc>
    </ItemStyle.DescriptBox>
  );
};
