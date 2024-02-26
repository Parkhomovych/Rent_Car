import { DecorSpan, DescriptBox, SpanDesc } from './InfoCar.styled';
import { nanoid } from 'nanoid';
export const FuncAndAcces = ({ carInfo }) => {
  const { accessories, functionalities } = carInfo;

  return (
    <DescriptBox style={{ marginBottom: '24px' }}>
      {accessories.map(item => (
        <SpanDesc key={nanoid(10)}>
          {item}
          <DecorSpan />
        </SpanDesc>
      ))}
      {functionalities.map((item, i) => {
        if (functionalities.length - 1 === i) {
          return <SpanDesc key={nanoid(10)}>{item}</SpanDesc>;
        }
        return (
          <SpanDesc key={nanoid(10)}>
            {item}
            <DecorSpan />
          </SpanDesc>
        );
      })}
    </DescriptBox>
  );
};
