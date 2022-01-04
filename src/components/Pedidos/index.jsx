import { Container } from "./styles"

export default function Pedidos() {

  return (
    <Container>
      <div>
        <table>

          <thead>
            <tr>
              <th>Id</th>
              <th>Pedido</th>
              <th>Data entrega</th>
              <th>Status</th>
              <th>Responsável</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </table>
      </div>
    </Container>
  )

}