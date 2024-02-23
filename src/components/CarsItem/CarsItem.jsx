import { useState } from 'react';
import Modal from 'react-modal';

import {
  Img,
  Item,
  TitleBox,
  SpanTitle,
  TopBox,
  DescriptBox,
  SpanDesc,
  Button,
  BtnHeard,
  Heart,
  FavoriteHeart,
  DecorSpan,
} from './Carsitem.styled';

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
export const CarsItem = ({
  carInfo: {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handlerFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Item>
      <TopBox>
        <BtnHeard onClick={handlerFavorite}>
          {isFavorite ? <FavoriteHeart /> : <Heart />}
        </BtnHeard>

        <Img $bgImg={img} width="274" height="268" src={img} alt={make} />
      </TopBox>
      <TitleBox>
        <div>
          <p>
            {make} <SpanTitle>{model}</SpanTitle>,{year}
          </p>
        </div>
        <p>{rentalPrice}</p>
      </TitleBox>
      <DescriptBox>
        <SpanDesc>
          {address}
          <DecorSpan />
        </SpanDesc>
        <SpanDesc>
          {rentalCompany}
          <DecorSpan />
        </SpanDesc>
        <SpanDesc>
          {type}
          <DecorSpan />
        </SpanDesc>
        <SpanDesc>
          {model}
          <DecorSpan />
        </SpanDesc>
        <SpanDesc>
          {id}
          <DecorSpan />
        </SpanDesc>
        <SpanDesc $after={false}>{accessories[0]}</SpanDesc>
      </DescriptBox>
      <Button onClick={OpenModal} type="button">
        Learn more
      </Button>
      {isModalOpen && (
        <div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      )}
    </Item>
  );
};
