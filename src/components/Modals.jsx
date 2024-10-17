import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from "./SongSearch";


const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="data:image/jpeg;base64,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" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores
          eum minima earum atque aut blanditiis, cumque eius! Eius nobis odit
          tempora aperiam quod obcaecati repellendus optio voluptas numquam
          necessitatibus?
        </p>
        <img src="data:image/jpeg;base64,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" alt="Nature" />
      </Modal>
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Modal Canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra app de React, gracias a un React
          Portal.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYohj8TJwRbjulacFsUibI35WawGp7cfc4Q&s" alt="Tech" />
      </ModalPortal>
    </div>
  );
};

export default Modals;