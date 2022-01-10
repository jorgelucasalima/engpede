import { Container, Content } from "./styles"

import { ModalCadastroPedido } from "../ModalCadastroPedido"

export default function Header() {
  
  return (
    <Container>
      <Content>
        <a href="">Empresa</a>
        <a href="">Pedidos</a>
        <a href="">Produtos</a>
        <button >Pedido</button>
      </Content>
    </Container>
  )
}