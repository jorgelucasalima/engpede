import { FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa"
import { Container } from "./styles"

import firebase from "../../services/firebaseConnection"


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
              <td>Predio Queiroz Galvão</td>
              <td>01/01/2020</td>
              <td>Entregue</td>
              <td>Pedro</td>
              <td> 
                <FaRegEye/>
                <FaEdit/>
                <FaRegTrashAlt/>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Casa Itamaracá</td>
              <td>02/03/2023</td>
              <td>Aberto</td>
              <td>Manoel</td>
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