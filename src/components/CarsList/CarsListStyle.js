import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 28px;
`;
export const LoadMore = styled.button`
  width: 100px;
  padding: 14px;
  margin: 32px auto;

  text-align: center;
  color: #3470ff;
  border-radius: 12px;

  transition: color 250ms linear, scale 250ms linear;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      scale: calc(1.2);
      color: #0b44cd;
    }
  }

  @media (hover: none) and (pointer: coarse) {
    &:active {
      color: #0b44cd;
    }
  }
`;
