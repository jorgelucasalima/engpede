import { Container, Content } from "./styles"
import logo from "../../assets/logo.png"
import usuario from "../../assets/perfil.jpg"

import {FaBoxOpen, FaRegBell} from 'react-icons/fa'

export default function Header() {
  
  return (
    <Container>
      <Content>
        <a href="">Home</a>
        <a href="">Empresa</a>
        <a href="">Pedidos</a>
        <a href="">Produtos</a>
        <a href="">Funcionários</a>
      </Content>
    </Container>
  )
}