import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors';
import { addFavoriteCars, removeFavoriteCar } from '../../redux/CarSlice';
import * as Styled from './Carsitem.styled';
import { DescContainer } from './InfoCar/DescContainer';

import Modal from 'react-modal';
import { FuncAndAcces } from './InfoCar/FuncAndAcces';
import { RentalInfo } from './InfoCar/RentalInfo';
Modal.setAppElement('#root');
Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    maxWidth: '541px',
    padding: '40px',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',

    background: '#fff',
    borderRadius: '24px',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
  },
};
export const CarsItem = ({ carInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const favoriteCar = useSelector(selectFavoriteCars);
  useEffect(() => {
    if (favoriteCar.some(i => i.id === carInfo.id)) {
      setIsFavorite(true);
    }
  }, [favoriteCar, carInfo]);

  const OpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  const handlerFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch(removeFavoriteCar(carInfo.id));
      return;
    }
    dispatch(addFavoriteCars(carInfo));
  };

  return (
    <Styled.Item>
      <Styled.TopBox>
        <Styled.BtnHeard onClick={handlerFavorite}>
          {isFavorite ? <Styled.FavoriteHeart /> : <Styled.Heart />}
        </Styled.BtnHeard>
        <Styled.Img
          loading="lazy"
          $bgImg={carInfo.img}
          width="274"
          height="208"
          src={carInfo.img}
          alt={carInfo.make}
        />
      </Styled.TopBox>
      <Styled.TitleBox>
        <div>
          <p>
            {carInfo.make} <Styled.SpanTitle>{carInfo.model}</Styled.SpanTitle>
            {', '}
            {carInfo.year}
          </p>
        </div>
        <p>{carInfo.rentalPrice}</p>
      </Styled.TitleBox>
      <DescContainer isModalInfo={false} carInfo={carInfo} />
      <Styled.Button onClick={OpenModal} type="button">
        Learn more
      </Styled.Button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <Styled.BtnClose type="button" onClick={closeModal}>
            <Styled.SvgClose />
          </Styled.BtnClose>
          <Styled.ImgModal
            width="461"
            height="180"
            src={carInfo.img}
            alt={carInfo.make}
          />
          <Styled.TitleBox>
            <div>
              <p>
                {carInfo.make}{' '}
                <Styled.SpanTitle>
                  {carInfo.model}
                  {', '}
                </Styled.SpanTitle>
                {carInfo.year}
              </p>
            </div>
          </Styled.TitleBox>
          <DescContainer isModalInfo={true} carInfo={carInfo} />
          <Styled.Description>{carInfo.description}</Styled.Description>
          <Styled.SubTitle>Accessories and functionalities:</Styled.SubTitle>
          <FuncAndAcces carInfo={carInfo} />
          <Styled.RentalTitle>Rental Conditions: </Styled.RentalTitle>
          <RentalInfo carInfo={carInfo} />
          <Styled.RentalBtn>Rental car</Styled.RentalBtn>
        </Modal>
      )}
    </Styled.Item>
  );
};
