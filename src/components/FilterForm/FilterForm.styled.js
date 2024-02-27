import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export const Form = styled.form`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 18px;
`;
export const BoxInput = styled.div`
  display: flex;
`;
export const Label = styled.label`
  position: relative;
  display: flex;
`;

export const FilterInput = styled.input`
  width: ${p => p.$width};
  height: 48px;
  padding: 14px 18px;

  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  cursor: ${p => (p?.$cursor === 'pointer' ? 'pointer' : 'text')};

  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 1;
  }
`;

export const ArrowDown = styled(IoIosArrowDown)`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 14px;
  right: 18px;

  pointer-events: none;
`;
export const ArrowUp = styled(IoIosArrowUp)`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 14px;
  right: 18px;

  pointer-events: none;
`;

export const Span = styled.span`
  position: absolute;
  bottom: 50px;
  left: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;

export const BoxList = styled.ul`
  width: ${p => p?.$width};
  max-height: ${p => p?.$height};
  padding: 14px 18px;

  display: flex;
  flex-direction: column;
  column-gap: 8px;

  position: absolute;
  top: 52px;
  z-index: 10;

  overflow-x: auto;
  background: #fff;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
`;

export const Option = styled.span`
  cursor: pointer;
  padding: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${p => (p?.$active ? '#121417' : 'rgba(18, 20, 23, 0.2)')};
`;
export const ValuePrice = styled.span`
  position: absolute;
  top: 24px;
  left: 24px;
  transform: translateY(-50%);

  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;
`;

export const SubmitBtn = styled.button`
  margin-top: auto;
  width: 136px;
  height: 48px;
  border-radius: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;

  color: #fff;
  background-color: #3470ff;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #0b44cd;
  }
`;
