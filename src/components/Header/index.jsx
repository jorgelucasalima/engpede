import { Container, Content } from "./styles"
import {FaBoxOpen} from 'react-icons/fa'

import logo from '../../assets/logo.png'

export default function Header() {
  
  return (
    <Container>
      <Content>
        <a href="">Empresa</a>
        <a href="">Pedidos</a>
        <a href="">Produtos</a>
        <button>Pedido</button>
      </Content>
    </Container>
  )
}