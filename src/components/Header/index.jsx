import { Container, Content, ContainerModal } from "./styles"
import Modal from "react-modal"
import { useState } from "react"

import {FaWindowClose} from 'react-icons/fa'


export default function Header() {
  

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

 
  return (
  
    <Container>
      <Content>
        <a href="">Empresa</a>
        <a href="">Pedidos</a>
        <a href="">Produtos</a>
        <button onClick={openModal}>Pedido</button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="styledOverlay"
          className="StyledModal"
          
        >
          <ContainerModal>
            <h2>Criar Pedido</h2>

            <input 
              type="text" 
              placeholder="Nome do Pedido"
            />
            <input 
              type="text" 
              placeholder="Responsável"
            />
            <input 
              type="date" 
              placeholder="Data da Entrega"
            />
            <button type="submit">Cadastrar</button>

          </ContainerModal>


        </Modal>



      </Content>
    </Container>
   
    
    



  )
}