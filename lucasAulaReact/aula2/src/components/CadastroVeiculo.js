import { useContext, useState } from 'react';
import { veiculoContext } from '../contexts/veiculoContext';
function CadastroVeiculo() {
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [modelo, setModelo] = useState('');

    const [veiculos, setVeiculos] = useContext(veiculoContext);
    


    function cadastrar(){
        let veiculo = {
            placa,
            marca,
            ano,
            modelo,
        };

        const newList = veiculos.concat(veiculo);
        setVeiculos(newList);
       
        

        setPlaca('');
        setMarca('');
        setAno('');
        setModelo('');
     
    }



    return (
        <main className='cadastro'>
            <h2> Cadastro de Veículo </h2>
            <input
                placeholder='Placa'
                type='text'
                value={placa}
                onChange={(e) => setPlaca(e.target.value)}
            />

            <input
                placeholder='Marca'
                type='text'
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
            />

            <input
                placeholder='Ano'
                type='text'
                value={ano}
                onChange={(e) => setAno(e.target.value)}
            />

            <input
                placeholder='Modelo'
                type='text'
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
            />
            <button type='button' onClick={cadastrar}>Cadastrar</button>


        </main>
    );
}
export default CadastroVeiculo;
