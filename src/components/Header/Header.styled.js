import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 12px;
`;
export const List = styled.ul`
  display: flex;
  column-gap: 32px;
  justify-content: center;
`;
export const MyLink = styled(NavLink)`
  padding: 5px 0;
  position: relative;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  color: #000000;

  transition: color 250ms linear;
  &.active {
    color: #0b44cd;
  }
  &:hover {
    color: #0b44cd;
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;

    border-radius: 1px;
    background-color: #0b44cd;
  }
`;
