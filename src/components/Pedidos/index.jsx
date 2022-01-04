import { FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa"
import { Container } from "./styles"

//1. ajustar o style do tr e do td 
//2. ajustar os svg dos icones
//3. criar a collecion dos pedidos no firebase
//4. criar a collecion dos produtos no firebase
//5. criar a collecion dos usuarios no firebase
//6. criar o map de pedidos no table
//7. criar regra do botão de adicionar pedido
//8. cria cadastro de produtos em produtos

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
            <tr>
              <td>1</td>
              <td>Pedido 1</td>
              <td>01/01/2020</td>
              <td>Aberto</td>
              <td>Pedro</td>
              <td> 
                <FaRegEye/>
                <FaEdit/>
                <FaRegTrashAlt/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )

}