import styled from 'styled-components';
import { HiOutlinePhone } from 'react-icons/hi2';

export const BtnPhone = styled.a`
  position: fixed;
  bottom: 32px;
  right: 32px;

  width: 75px;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.blue};
  transition: background-color ${p => p.theme.animation};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.hoverBlue};
  }
`;
export const SvgPhone = styled(HiOutlinePhone)`
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.white};
`;
export const TextCall = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: ${p => p.theme.colors.white};
`;
