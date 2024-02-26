import styled from 'styled-components';

export const DescriptBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 343px;
`;
export const SpanDesc = styled.span`
  position: relative;
  margin-right: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;
export const DecorSpan = styled.span`
  display: block;
  width: 1px;
  height: 14px;

  position: absolute;
  top: 2px;
  right: -6px;

  background-color: rgba(18, 20, 23, 0.1);
`;
export const RentalBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentaSpan = styled.span`
  border-radius: 35px;
  padding: 7px 14px;
  background-color: #f9f9f9;
`;
export const BlueSpan = styled.span`
  font-weight: 600;
  color: #3470ff;
`;
