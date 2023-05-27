import Modal from './Modal'

const Modals = () => {
  return (
    <div>
      <h2>Modals</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 2</h3>
        <p>Hi, this is the content of my second modal wih a picture of nature.</p>
        <img
          src="https://picsum.photos/id/28/400/400"
          alt="nature"
          width="400"
          height="400"
        />
      </Modal>
      <Modal>
        <h3>Modal 3</h3>
        <p>This is the content of my third modal with a picture of a lake.</p>
        <img
          src="https://picsum.photos/id/16/400/400"
          alt="a cost with a lake"
          width="400"
          height="400"
        />
      </Modal>
      <hr />
    </div>
  )
}

export default Modals
