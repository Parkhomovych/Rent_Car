import styled from 'styled-components';

export const Form = styled.form`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 18px;
`;
export const Box = styled.div`
  display: flex;
`;
export const Label = styled.label`
  position: relative;
`;
export const Input = styled.input`
  height: 48px;
  padding: 8px;
  border: none;
  background: #f7f7fb;

  &:focus {
    outline: none;
  }
`;
export const Select = styled.select`
  width: ${p => p.$width};
  height: 48px;
  padding: 8px;

  border-radius: 14px;
  border: none;
  background: #f7f7fb;

  &:focus {
    outline: none;
  }
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
export const Button = styled.button`
  margin-top: auto;
  width: 136px;
  height: 48px;
  border-radius: 12px;
  color: #fff;
  background-color: #3470ff;
`;
