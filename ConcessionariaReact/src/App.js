import { useState } from "react";
import ApresentarVeiculos from "./components/ApresentarVeiculos";
import CadastroVeiculo from "./components/CadastroVeiculo";
import { veiculoContext } from "./contexts/veiculoContext";
import './css.css';

function App() {
  const veiculos = useState([]);
  // function apresentarVeiculo(){
  //   alert('Veiculo')
  // }
  return (
    <veiculoContext.Provider value={veiculos}>
    <main className='home'>
    <CadastroVeiculo/>
    <ApresentarVeiculos/>
    </main>
    </veiculoContext.Provider>
  );
}
export default App;
