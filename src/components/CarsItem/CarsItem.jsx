import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from '../../redux/selectors';
import { addFavoriteCars, removeFavoriteCar } from '../../redux/CarSlice';
import * as ItemStyle from './Carsitem.styled';
import { DescContainer } from './DescContainer';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
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
  };
  const closeModal = () => {
    setIsModalOpen(false);
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
    <ItemStyle.Item>
      <ItemStyle.TopBox>
        <ItemStyle.BtnHeard onClick={handlerFavorite}>
          {isFavorite ? <ItemStyle.FavoriteHeart /> : <ItemStyle.Heart />}
        </ItemStyle.BtnHeard>
        <ItemStyle.Img
          loading="lazy"
          $bgImg={carInfo.img}
          width="274"
          height="268"
          src={carInfo.img}
          alt={carInfo.make}
        />
      </ItemStyle.TopBox>
      <ItemStyle.TitleBox>
        <div>
          <p>
            {carInfo.make}{' '}
            <ItemStyle.SpanTitle>{carInfo.model}</ItemStyle.SpanTitle>
            {', '}
            {carInfo.year}
          </p>
        </div>
        <p>{carInfo.rentalPrice}</p>
      </ItemStyle.TitleBox>
      <DescContainer carInfo={carInfo} />
      <ItemStyle.Button onClick={OpenModal} type="button">
        Learn more
      </ItemStyle.Button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>
            <ItemStyle.CloseBtnModal />
          </button>
          <ItemStyle.Img
            $bgImg={carInfo.img}
            width="461"
            height="180"
            src={carInfo.img}
            alt={carInfo.make}
          />
        </Modal>
      )}
    </ItemStyle.Item>
  );
};
