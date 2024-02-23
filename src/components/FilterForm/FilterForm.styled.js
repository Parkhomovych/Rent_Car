import styled from 'styled-components';
import { Form } from 'formik';

export const MyForm = styled(Form)`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 18px;
`;
export const MyLabel = styled.label`
  position: relative;
 
`;
export const Span = styled.span`
  position: absolute;

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
