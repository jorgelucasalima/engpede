import { Container } from "./styles";
import Resumo from "../../components/Resumo";
import Pedidos from "../../components/Pedidos";


export default function Dashboard() {
  return (
    <Container>
      <Resumo />
      <Pedidos/>
    </Container>
  );
}