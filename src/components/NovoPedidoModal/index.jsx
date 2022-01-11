import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");


export function NovoPedidoModal(params) {

  const [modalIsOpen, setIsOpen] = useState(false);

  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <h2>Criar Pedido</h2>
    </Modal>
  )
}