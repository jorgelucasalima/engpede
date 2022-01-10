import Modal from 'react-modal';
import {FaWindowClose} from 'react-icons/fa';

export function ModalCadastroPedido() {
  
  return (
    
    <Modal
      isOpen={true}
      contentLabel="Modal Cadastro Pedido"
      ariaHideApp={false}
      className="ModalCadastroPedido"
      >
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

    </Modal>

   
  )
}