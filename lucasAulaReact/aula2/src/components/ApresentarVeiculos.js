import { useContext } from "react";
import { veiculoContext } from "../contexts/veiculoContext";

function ApresentarVeiculos() {
    const [veiculos, setVeiculos] = useContext(veiculoContext);

    function removerPlaca(index){
            const newList = veiculos.filter((veiculo, i) => {
                return i != index
            })
            setVeiculos(newList)
    }


    return (
    
      <main className='apresentacao'>
          <h2>Veículos</h2>
          <ul>
            {
                veiculos.map((veiculo, index)=>(
                    <li key={index}>
                        {veiculo.placa}
                        <button type='button' onClick={()=>removerPlaca(index)}> 
                        Apagar</button>
   
                    </li>
                ))
            }
          </ul>
      </main>
    );
  }
  export default ApresentarVeiculos;