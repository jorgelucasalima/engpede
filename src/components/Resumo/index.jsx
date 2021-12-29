import { Container } from "./styles"
import {FaDatabase, FaColumns, FaCopy} from 'react-icons/fa'

export default function Resumo() {
  return (
    <Container>
      <div>
        <header>
          <p>Total Pedidos</p>
          <FaDatabase size={26} color=""/>
        </header>
        <strong>17</strong>
      </div>
      <div>
        <header>
          <p>Total Produtos</p>
          <FaColumns size={26} color=""/>
        </header>
        <strong>45</strong>
      </div>
      <div className="destaque-fundo">
        <header>
          <p>Pedidos para Comprar</p>
          <FaCopy size={26} color="" />
        </header>
        <strong>3</strong>
      </div>
    </Container>
  )
}