import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export const Item = styled.li`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopBox = styled.div`
  position: relative;

  width: 274px;
  height: 268px;
  position: relative;
`;
export const BtnHeard = styled.button`
  display: block;
  position: absolute;

  top: 14px;
  right: 14px;
`;
export const Heart = styled(FaRegHeart)`
  width: 18px;
  height: 18px;
  fill: rgba(255, 255, 255, 0.8);
`;
export const FavoriteHeart = styled(FaHeart)`
  width: 18px;
  height: 18px;

  fill: rgba(255, 255, 255, 0.8);
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DescriptBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;
`;
export const SpanTitle = styled.span`
  color: #3470ff;
`;

export const SpanDesc = styled.span`
  position: relative;
  margin-right: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 274px;
  height: 44px;
  border-radius: 12px;
  color: #fff;
  background-color: #3470ff;
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
