import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export const Item = styled.li`
  width: 274px;
  height: 380px;
  display: flex;
  flex-direction: column;
`;
export const TopBox = styled.div`
  position: relative;

  margin-bottom: 14px;
  width: 274px;
  height: 208px;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
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

  fill: #3470ff;
`;
export const Img = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 208px;
`;
export const SpanTitle = styled.span`
  color: #3470ff;
`;
export const Button = styled.button`
  margin-top: auto;
  width: 274px;
  height: 44px;
  border-radius: 12px;
  color: #fff;
  background-color: #3470ff;

  transition: background-color 250ms linear;
  &:hover {
    background-color: #0b44cd;
  }
`;

// Modal //

export const MyModal = styled(Modal)``;

export const BoxModal = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const BtnClose = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  right: 14px;
`;
export const SvgClose = styled(IoMdClose)`
  width: 24px;
  height: 24px;

  transition: color 250ms linear;
  &:hover {
    color: #0b44cd;
  }
`;
export const ImgModal = styled.img`
  margin-bottom: 14px;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;
export const Description = styled.p`
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
`;
export const SubTitle = styled.h3`
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
`;
export const RentalTitle = styled.h3`
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: #121417;
`;
export const RentalLink = styled.a`
  padding: 12px 50px;
  width: 168px;
  height: 44px;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;

  color: #fff;
  border-radius: 12px;
  background-color: #3470ff;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #0b44cd;
  }
`;
