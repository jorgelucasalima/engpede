import Dashboard from "./components/Dashboard";
import Header from "./components/Header";


import { EstiloGlobal } from "./styles/StylesGlobal";
import {PedidosContext} from './PedidosContext'


export default function App() {

  
  return (
    <PedidosContext.Provider value={[]}>
      <Header/>
      <Dashboard/>
      <EstiloGlobal/>
    </PedidosContext.Provider>
  );
}

