import { useModal } from '../../hooks/useModal'
import Modal from './Modal'
import ContactForm from '../form/ContactForm'
import ModalPortal from './ModalPortal'

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false)
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false)

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>
          Hi, this is the content of my first modal wih a picture of nature.
        </p>
        <div className="modal-img">
          <img
            src="https://picsum.photos/id/28/200/200"
            alt="nature"
            width="200"
            height="200"
          />
        </div>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>This is the content of my second modal with a picture of a lake.</p>
        <div className="modal-img">
          <img
            src="https://picsum.photos/id/16/200/200"
            alt="a cost with a lake"
            width="200"
            height="200"
          />
        </div>
      </Modal>
      <button onClick={openModalContact}>Contact Modal</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalPortal}>Portal Modal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
      <h3>Modal Portal</h3>
        <p>This is the content of my modal that is open in another node different from the one that is loading in the React app, thanks to a React portal.</p>
        <div className="modal-img">
          <img
            src="https://picsum.photos/id/17/200/200"
            alt="a trail with pines"
            width="200"
            height="200"
          />
        </div>
      </ModalPortal>
    </div>
  )
}

export default Modals
