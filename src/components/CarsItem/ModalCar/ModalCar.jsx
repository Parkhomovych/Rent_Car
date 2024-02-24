import Modal from 'react-modal';
import { CloseBtnModal, Img } from './ModalCar.styled';
Modal.setAppElement('#root');

export const ModalCar = ({ isModalOpen, closeModal, carInfo }) => {
  <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }}
    contentLabel="Example Modal"
  >
    <button onClick={closeModal}>
      <CloseBtnModal />
    </button>
    <Img
      $bgImg={carInfo.img}
      width="461"
      height="180"
      src={carInfo.img}
      alt={carInfo.make}
    />
  </Modal>;
};
