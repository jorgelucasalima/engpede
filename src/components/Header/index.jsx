import { Container, Content } from "./styles"
import logo from "../../assets/logo.png"

import {FaBoxOpen} from 'react-icons/fa'

export default function Header() {
  
  return (
    <Container>
      <Content>
        <FaBoxOpen size={50}/>
        <hr />
        <a href=""></a>
        <a href="">Home</a>
        <a href="">Empresa</a>
        <a href="">Pedidos</a>
        <a href="">Produtos</a>
        <a href="">Funcionários</a>
      </Content>
    </Container>
  )
}