import { Container, Content } from "./styles"
import {FaWindowClose} from 'react-icons/fa';
import Modal from "react-modal"
import { useState } from "react"

export default function Header() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  //setando true para modal aberto
  function openModal() {
    setModalIsOpen(true)
  }

  //setando false para fechar modal, 
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
        >
          <form>
            <button>
              <FaWindowClose/>
            </button>

            <h2>Criar Pedido</h2>

            <input 
              type="text"
              placeholder="Nome do Pedido" 
            
            />

            <input 
              type="text"
              placeholder="Nome do Responsável" 
              
            />

            <input 
              type="date"
              placeholder="Data da Entrega" 
              
            />

            <button type='submit'>Cadastrar</button>
          </form>

        </Modal>
        
      </Content>
    </Container>
  )
}